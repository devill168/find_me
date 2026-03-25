<template>
  <div class="container-fluid py-4 dashboard-page">
    <div class="row justify-content-center">
      <div class="col-lg-11">
        <div class="card shadow-sm glass-card">
          <div class="card-header d-flex align-items-center justify-content-between header-gradient">
            <div class="d-flex align-items-center gap-3">
              <img src="@/assets/logo_moh.png" alt="Logo MOH" class="logo" />
              <div>
                <h4 class="mb-0 title-dashboard">{{ t('find_location.title') }}</h4>
                <small class="text-muted">
                  {{ t('find_location.subtitle') }}
                </small>
              </div>
            </div>

            <button class="btn btn-outline-secondary btn-animated px-3" @click="resetFilters">
              <i class="fa-solid fa-rotate-right me-1"></i>
              {{ t('find_location.reset') }}
            </button>
          </div>

          <div class="card-body">
            <div class="row g-4">
              <!-- Filter Form -->
              <div class="col-lg-8">
                <div class="soft-card p-4 h-100">
                  <div class="d-flex align-items-center justify-content-end mb-3">
                    <span class="badge bg-light text-dark border">{{ t('find_location.databaseStyle') }}</span>
                  </div>

                  <div class="row g-3">
                    <!-- Province -->
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{ t('find_location.province') }}</label>
                      <select
                        v-model="form.province_code"
                        class="form-select form-select-custom"
                        @change="onProvinceChange"
                      >
                        <option value="">{{ t('find_location.selectProvince') }}</option>
                        <option
                          v-for="province in provinces"
                          :key="province.id"
                          :value="province.province_code"
                        >
                          {{ getProvinceName(province) }}
                        </option>
                      </select>
                    </div>

                    <!-- District -->
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{ t('find_location.district') }}</label>
                      <select
                        v-model="form.district_code"
                        class="form-select form-select-custom"
                        :disabled="!form.province_code"
                        @change="onDistrictChange"
                      >
                        <option value="">{{ t('find_location.selectDistrict') }}</option>
                        <option
                          v-for="district in filteredDistricts"
                          :key="district.id"
                          :value="district.district_code"
                        >
                          {{ getDistrictName(district) }}
                        </option>
                      </select>
                    </div>

                    <!-- Commune -->
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{ t('find_location.commune') }}</label>
                      <select
                        v-model="form.commune_code"
                        class="form-select form-select-custom"
                        :disabled="!form.district_code"
                        @change="onCommuneChange"
                      >
                        <option value="">{{ t('find_location.selectCommune') }}</option>
                        <option
                          v-for="commune in filteredCommunes"
                          :key="commune.id"
                          :value="commune.commune_code"
                        >
                          {{ getCommuneName(commune) }}
                        </option>
                      </select>
                    </div>

                    <!-- OD -->
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{ t('find_location.od') }}</label>
                      <select
                        v-model="form.od_code"
                        class="form-select form-select-custom"
                        :disabled="!form.commune_code"
                        @change="onODChange"
                      >
                        <option value="">{{ t('find_location.selectOD') }}</option>
                        <option
                          v-for="od in filteredODs"
                          :key="od.id"
                          :value="od.od_code"
                        >
                          {{ getODName(od) }}
                        </option>
                      </select>
                    </div>

                    <!-- HC -->
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{ t('find_location.hc') }}</label>
                      <select
                        v-model="form.hc_code"
                        class="form-select form-select-custom"
                        :disabled="!form.od_code"
                        @change="onHCChange"
                      >
                        <option value="">{{ t('find_location.selectHC') }}</option>
                        <option
                          v-for="hc in filteredHCs"
                          :key="hc.id"
                          :value="hc.hc_code"
                        >
                          {{ getHCName(hc) }}
                        </option>
                      </select>
                    </div>

                    <!-- Village -->
                    <div class="col-md-6">
                      <label class="form-label fw-semibold">{{ t('find_location.village') }}</label>
                      <select
                        v-model="form.village_code"
                        class="form-select form-select-custom"
                        :disabled="!form.hc_code"
                      >
                        <option value="">{{ t('find_location.selectVillage') }}</option>
                        <option
                          v-for="village in filteredVillages"
                          :key="village.id"
                          :value="village.village_code"
                        >
                          {{ getVillageName(village) }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="d-flex gap-2 mt-4 flex-wrap">
                    <button class="btn btn-search btn-animated px-4" @click="searchLocation">
                      <i class="fa-solid fa-magnifying-glass me-1"></i>
                      {{ t('find_location.search') }}
                    </button>

                    <button class="btn btn-picture btn-animated px-4" @click="showPictureOnly">
                      <i class="fa-regular fa-camera me-1"></i>
                      {{ t('find_location.picture') }}
                    </button>

                    <button class="btn btn-light border btn-animated px-4" @click="resetFilters">
                      {{ t('find_location.clear') }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Summary -->
              <div class="col-lg-4">
                <div class="soft-card p-4 h-100">
                  <h5 class="mb-3 form-title">{{ t('find_location.selectedResult') }}</h5>

                  <div class="summary-item">
                    <span class="summary-label">{{ t('find_location.province') }}</span>
                    <span class="summary-value">{{ selectedProvinceName || '-' }}</span>
                  </div>

                  <div class="summary-item">
                    <span class="summary-label">{{ t('find_location.district') }}</span>
                    <span class="summary-value">{{ selectedDistrictName || '-' }}</span>
                  </div>

                  <div class="summary-item">
                    <span class="summary-label">{{ t('find_location.commune') }}</span>
                    <span class="summary-value">{{ selectedCommuneName || '-' }}</span>
                  </div>

                  <div class="summary-item">
                    <span class="summary-label">{{ t('find_location.od') }}</span>
                    <span class="summary-value">{{ selectedODName || '-' }}</span>
                  </div>

                  <div class="summary-item">
                    <span class="summary-label">{{ t('find_location.hc') }}</span>
                    <span class="summary-value">{{ selectedHCName || '-' }}</span>
                  </div>

                  <div class="summary-item border-0 pb-0">
                    <span class="summary-label">{{ t('find_location.village') }}</span>
                    <span class="summary-value">{{ selectedVillageName || '-' }}</span>
                  </div>

                  <div class="result-box mt-4">
                    <div class="small text-muted mb-1">{{ t('find_location.currentSearch') }}</div>
                    <div class="fw-semibold">{{ resultMessage }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Google Map -->
            <div v-if="activeView === 'map'" class="soft-card p-4 mt-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="mb-0 form-title">{{ t('find_location.googleMap') }}</h5>
                <span class="badge bg-light text-dark border">
                  {{ mapLat && mapLng ? t('find_location.locationLoaded') : t('find_location.noLocation') }}
                </span>
              </div>

              <div v-if="mapLat && mapLng" class="map-container">
                <iframe
                  :src="googleMapUrl"
                  width="100%"
                  height="620"
                  style="border:0; border-radius: 14px"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div v-else class="alert alert-warning custom-alert text-center">
                <i class="fa-solid fa-map-location-dot me-2"></i>
                {{ t('find_location.noMapData') }}
                <b>{{ t('find_location.search') }}</b>.
              </div>
            </div>

            <!-- Picture Preview -->
            <div v-if="activeView === 'picture'" class="soft-card p-4 mt-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="mb-0 form-title">{{ t('find_location.locationPicture') }}</h5>
                <span class="badge bg-light text-dark border">
                  {{ pictureUrl ? t('find_location.imageLoaded') : t('find_location.noImage') }}
                </span>
              </div>

              <div v-if="pictureUrl" class="text-center">
                <img :src="pictureUrl" :alt="t('find_location.locationImage')" class="location-image" />
              </div>

              <div v-else class="alert alert-info custom-alert text-center">
                <i class="fa-solid fa-image me-2"></i>
                {{ t('find_location.noImageFoundMessage') }}
                <b>{{ t('find_location.od') }}</b> {{ t('find_location.or') }} <b>{{ t('find_location.hc') }}</b>
                {{ t('find_location.andClick') }} <b>{{ t('find_location.picture') }}</b>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { useI18n } from "vue-i18n"

export default {
  name: "FindLocation",
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  },

  data() {
    return {
      form: {
        province_code: "",
        district_code: "",
        commune_code: "",
        od_code: "",
        hc_code: "",
        village_code: "",
      },

      provinces: [],
      districts: [],
      communes: [],
      ods: [],
      healthCenters: [],
      villages: [],

      filteredDistricts: [],
      filteredCommunes: [],
      filteredODs: [],
      filteredHCs: [],
      filteredVillages: [],

      resultMessage: "",
      mapLat: null,
      mapLng: null,
      pictureUrl: "",
      activeView: "",
    }
  },

  computed: {
    selectedProvinceName() {
      const item = this.provinces.find(
        x => String(x.province_code) === String(this.form.province_code)
      )
      return item ? this.getProvinceName(item) : ""
    },

    selectedDistrictName() {
      const item = this.filteredDistricts.find(
        x => String(x.district_code) === String(this.form.district_code)
      )
      return item ? this.getDistrictName(item) : ""
    },

    selectedCommuneName() {
      const item = this.filteredCommunes.find(
        x => String(x.commune_code) === String(this.form.commune_code)
      )
      return item ? this.getCommuneName(item) : ""
    },

    selectedODName() {
      const item = this.filteredODs.find(
        x => String(x.od_code) === String(this.form.od_code)
      )
      return item ? this.getODName(item) : ""
    },

    selectedHCName() {
      const item = this.filteredHCs.find(
        x => String(x.hc_code) === String(this.form.hc_code)
      )
      return item ? this.getHCName(item) : ""
    },

    selectedVillageName() {
      const item = this.filteredVillages.find(
        x => String(x.village_code) === String(this.form.village_code)
      )
      return item ? this.getVillageName(item) : ""
    },

    googleMapUrl() {
      if (!this.mapLat || !this.mapLng) return ""
      return `https://www.google.com/maps?q=${this.mapLat},${this.mapLng}&z=15&output=embed`
    },
  },

  async mounted() {
    this.resultMessage = this.t("find_location.pleaseSelectLocationFilter")
    await this.loadProvinces()
    await this.loadDistricts()
    await this.loadCommunes()
    await this.loadODs()
    await this.loadHealthCenters()
    await this.loadVillages()
  },

  methods: {
    getProvinceName(item) {
      return this.locale === "km" ? item.province_name_kh : item.province_name_en
    },

    getDistrictName(item) {
      return this.locale === "km" ? item.district_name_kh : item.district_name_en
    },

    getCommuneName(item) {
      return this.locale === "km" ? item.commune_name_kh : item.commune_name_en
    },

    getODName(item) {
      return this.locale === "km" ? item.od_name_kh : item.od_name_en
    },

    getHCName(item) {
      return this.locale === "km" ? item.hc_name_kh : item.hc_name_en
    },

    getVillageName(item) {
      return this.locale === "km" ? item.village_name_kh : item.village_name_en
    },

    async loadProvinces() {
      try {
        const res = await axios.get("/provinces")
        this.provinces = res.data.data || []
      } catch (error) {
        console.error("Failed to load provinces", error)
      }
    },

    async loadDistricts() {
      try {
        const res = await axios.get("/districts")
        this.districts = res.data.data || []
      } catch (error) {
        console.error("Failed to load districts", error)
      }
    },

    async loadCommunes() {
      try {
        const res = await axios.get("/communes")
        this.communes = res.data.data || []
      } catch (error) {
        console.error("Failed to load communes", error)
      }
    },

    async loadODs() {
      try {
        const res = await axios.get("/ods")
        this.ods = res.data.data || []
      } catch (error) {
        console.error("Failed to load ODs", error)
      }
    },

    async loadHealthCenters() {
      try {
        const res = await axios.get("/health-centers")
        this.healthCenters = res.data.data || []
      } catch (error) {
        console.error("Failed to load HCs", error)
      }
    },

    async loadVillages() {
      try {
        const res = await axios.get("/villages")
        this.villages = res.data.data || []
      } catch (error) {
        console.error("Failed to load villages", error)
      }
    },

    onProvinceChange() {
      this.form.district_code = ""
      this.form.commune_code = ""
      this.form.od_code = ""
      this.form.hc_code = ""
      this.form.village_code = ""

      this.filteredDistricts = this.districts.filter(
        d => String(d.province_code) === String(this.form.province_code)
      )

      this.filteredCommunes = []
      this.filteredODs = []
      this.filteredHCs = []
      this.filteredVillages = []

      this.clearResult()
    },

    onDistrictChange() {
      this.form.commune_code = ""
      this.form.od_code = ""
      this.form.hc_code = ""
      this.form.village_code = ""

      this.filteredCommunes = this.communes.filter(
        c => String(c.district_code) === String(this.form.district_code)
      )

      this.filteredODs = []
      this.filteredHCs = []
      this.filteredVillages = []

      this.clearResult()
    },

    onCommuneChange() {
      this.form.od_code = ""
      this.form.hc_code = ""
      this.form.village_code = ""

      this.filteredODs = this.ods.filter(
        o => String(o.commune_code) === String(this.form.commune_code)
      )

      this.filteredHCs = []
      this.filteredVillages = []

      this.clearResult()
    },

    onODChange() {
      this.form.hc_code = ""
      this.form.village_code = ""

      this.filteredHCs = this.healthCenters.filter(
        h => String(h.od_code) === String(this.form.od_code)
      )

      this.filteredVillages = []

      this.clearResult()
    },

    onHCChange() {
      this.form.village_code = ""

      this.filteredVillages = this.villages.filter(
        v => String(v.hc_code) === String(this.form.hc_code)
      )

      this.clearResult()
    },

    clearResult() {
      this.mapLat = null
      this.mapLng = null
      this.pictureUrl = ""
      this.activeView = ""
      this.resultMessage = this.t("find_location.pleaseSelectLocationFilter")
    },

    async searchLocation() {
      try {
        const res = await axios.get("/find-location/search", {
          params: this.form
        })

        const target = res.data?.data?.target

        if (target?.latitude && target?.longitude) {
          this.mapLat = target.latitude
          this.mapLng = target.longitude
          this.activeView = "map"
          this.pictureUrl = ""
          this.resultMessage = this.t("find_location.locationFoundSuccessfully")
        } else {
          this.mapLat = null
          this.mapLng = null
          this.activeView = "map"
          this.pictureUrl = ""
          this.resultMessage = this.t("find_location.noCoordinatesFound")
        }
      } catch (error) {
        console.error("Failed to search location", error)
        this.mapLat = null
        this.mapLng = null
        this.pictureUrl = ""
        this.activeView = "map"
        this.resultMessage = this.t("find_location.loadGoogleMapFailed")
      }
    },

    async showPictureOnly() {
      try {
        const res = await axios.get("/find-location/search", {
          params: this.form
        })

        const picture = res.data?.data?.picture || ""

        this.mapLat = null
        this.mapLng = null
        this.activeView = "picture"

        if (picture) {
          this.pictureUrl = picture
          this.resultMessage = this.t("find_location.imageLoadedSuccessfully")
        } else {
          this.pictureUrl = ""
          this.resultMessage = this.t("find_location.noImageFound")
        }
      } catch (error) {
        console.error("Failed to load picture", error)
        this.mapLat = null
        this.mapLng = null
        this.pictureUrl = ""
        this.activeView = "picture"
        this.resultMessage = this.t("find_location.loadPictureFailed")
      }
    },

    resetFilters() {
      this.form = {
        province_code: "",
        district_code: "",
        commune_code: "",
        od_code: "",
        hc_code: "",
        village_code: "",
      }

      this.filteredDistricts = []
      this.filteredCommunes = []
      this.filteredODs = []
      this.filteredHCs = []
      this.filteredVillages = []

      this.mapLat = null
      this.mapLng = null
      this.pictureUrl = ""
      this.activeView = ""

      this.resultMessage = this.t("find_location.filterResetSuccessfully")
    },
  },
}
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fffdf2 0%, #f8f9fc 100%);
}

.container-fluid{
  font-family: "Khmer OS Battambang", sans-serif;
}

.header-gradient {
  border: 0;
  background: linear-gradient(to bottom, #f7f1b5, #fffef7);
  padding: 18px 22px;
}

.title-dashboard {
  font-weight: 700;
  font-size: 28px;
  color: #2c2c2c;
}

.logo {
  width: 58px;
  height: 58px;
  object-fit: contain;
}

.glass-card {
  border: 0;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
}

.soft-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
}

.soft-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
}

.form-title {
  font-weight: 700;
  color: #2f3542;
}

.form-select-custom,
.form-control-custom {
  min-height: 46px;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  box-shadow: none;
  transition: all 0.2s ease;
}

.form-select-custom:focus,
.form-control-custom:focus {
  border-color: #d6c65a;
  box-shadow: 0 0 0 0.18rem rgba(214, 198, 90, 0.2);
}

.btn-search {
  background: linear-gradient(135deg, #f2dc6b, #e9cf47);
  border: none;
  color: #2f2f2f;
  font-weight: 600;
  border-radius: 12px;
}

.btn-picture {
  background: linear-gradient(135deg, #FFD230, #E1712B);
  border: none;
  color: #f9f9f9;
  font-weight: 600;
  border-radius: 12px;
}

.btn-animated {
  border-radius: 15px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn-animated:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px dashed #e9ecef;
}

.summary-label {
  color: #6c757d;
  font-weight: 500;
}

.summary-value {
  font-weight: 700;
  color: #2f3542;
  text-align: right;
}

.result-box {
  padding: 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, #fffbe6, #fffef7);
  border: 1px solid #f1e6a9;
}

.map-container {
  width: 100%;
  min-height: 620px;
}

.location-image {
  max-width: 100%;
  max-height: 500px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  object-fit: contain;
}

.custom-alert {
  border-radius: 14px;
  padding: 22px;
  font-weight: 500;
  font-size: 15px;
  background: linear-gradient(135deg, #fff9db, #fffdf3);
  border: 1px solid #f2e39c;
  color: #6b5e00;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.alert-info.custom-alert {
  background: linear-gradient(135deg, #eef7ff, #f8fbff);
  border-color: #cfe6ff;
  color: #1d4e89;
}

.alert-warning.custom-alert {
  background: linear-gradient(135deg, #fff7e6, #fffdf5);
  border-color: #ffd98c;
  color: #8a5a00;
}
</style>