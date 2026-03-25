<template>
  <div class="container-fluid py-4 dashboard">
    <div class="row justify-content-center">
      <div class="col-lg-11">
        <div class="card shadow-sm glass-card">
          <div class="card-header d-flex align-items-center justify-content-between header-gradient">
            <div class="mx-2">
              <img src="@/assets/logo_moh.png" alt="Logo MOH" class="logo" />
              <h5 class="mb-0 title-dashboard">Dashboard</h5>
            </div>

            <div class="d-flex gap-2 align-items-center flex-wrap">
              <select v-model="filters.range" class="form-select form-select-sm" style="width: 140px;">
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>

              <input v-model="filters.from" type="date" class="form-control form-control-sm" />
              <input v-model="filters.to" type="date" class="form-control form-control-sm" />

              <button class="btn btn-sm btn-light btn-animated" @click="loadDashboard">
                <span v-if="loading" class="spinner-border spinner-border-sm me-1"></span>
                Refresh
              </button>

              <button class="btn btn-sm btn-outline-light btn-animated" @click="$router.push('/test')">
                Open
              </button>
            </div>
          </div>

          <div class="card-body">
            <!-- KPI Cards -->
            <transition-group name="fade-up" tag="div" class="row g-3">
              <div class="col-6 col-md-4 col-xl-2" v-for="kpi in kpis" :key="kpi.key">
                <div class="kpi-card p-3 h-100">
                  <div class="text-muted small">{{ kpi.label }}</div>

                  <!-- Count-up animation number -->
                  <div class="fs-4 fw-semibold">
                    {{ formatNumber(animatedStats[kpi.key]) }}
                  </div>

                  <div class="kpi-glow"></div>
                </div>
              </div>
            </transition-group>

            <hr class="my-4" />

            <div class="row g-3">
              <!-- Doughnut / Pie chart -->
              <div class="col-lg-4">
                <div class="border rounded-4 p-3 h-100 soft-card">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="fw-semibold">KPI Distribution</div>
                    <small class="text-muted">Doughnut</small>
                  </div>

                  <div class="chart-wrap">
                    <canvas ref="pieCanvas" height="220"></canvas>
                  </div>

                  <div class="text-muted small mt-2">
                    *Based on OD / HC / Villages / Users / Visitors
                  </div>
                </div>
              </div>

              <!-- Top Provinces -->
              <div class="col-lg-4">
                <div class="border rounded-4 p-3 h-100 soft-card">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="fw-semibold">Top 1–5 Provinces</div>
                    <select v-model="topProvinceMetric" class="form-select form-select-sm" style="width: 180px;">
                      <option value="od_count">Most OD</option>
                      <option value="hc_count">Most HC</option>
                      <option value="village_count">Most Villages</option>
                      <option value="user_count">Most Users</option>
                      <option value="visitor_count">Most Visitors</option>
                    </select>
                  </div>

                  <div class="table-responsive">
                    <table class="table table-sm align-middle mb-0">
                      <thead>
                        <tr>
                          <th style="width: 55px;">#</th>
                          <th>Province</th>
                          <th class="text-end">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(row, idx) in topProvincesComputed"
                          :key="row.id"
                          class="row-hover"
                        >
                          <td>{{ idx + 1 }}</td>
                          <td class="fw-medium">{{ row.name }}</td>
                          <td class="text-end">{{ formatNumber(row[topProvinceMetric]) }}</td>
                        </tr>
                        <tr v-if="topProvincesComputed.length === 0">
                          <td colspan="3" class="text-center text-muted py-3">No data</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <small class="text-muted d-block mt-2">
                    *Sorted by {{ provinceMetricLabel(topProvinceMetric) }}
                  </small>
                </div>
              </div>

              <!-- Top Health Centers -->
              <div class="col-lg-4">
                <div class="border rounded-4 p-3 h-100 soft-card">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="fw-semibold">Top 1–5 Health Centers (HC)</div>
                    <select v-model="topHCMetric" class="form-select form-select-sm" style="width: 180px;">
                      <option value="visitor_count">Most Visitors</option>
                      <option value="user_count">Most Users</option>
                      <option value="village_count">Most Villages</option>
                    </select>
                  </div>

                  <div class="table-responsive">
                    <table class="table table-sm align-middle mb-0">
                      <thead>
                        <tr>
                          <th style="width: 55px;">#</th>
                          <th>HC</th>
                          <th class="text-end">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(row, idx) in topHCComputed"
                          :key="row.id"
                          class="row-hover"
                        >
                          <td>{{ idx + 1 }}</td>
                          <td>
                            <div class="fw-medium">{{ row.name }}</div>
                            <div class="text-muted small">Province: {{ row.province_name }}</div>
                          </td>
                          <td class="text-end">{{ formatNumber(row[topHCMetric]) }}</td>
                        </tr>
                        <tr v-if="topHCComputed.length === 0">
                          <td colspan="3" class="text-center text-muted py-3">No data</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <small class="text-muted d-block mt-2">
                    *Sorted by {{ hcMetricLabel(topHCMetric) }}
                  </small>
                </div>
              </div>
            </div>

            <hr class="my-4" />

            <!-- Optional: Quick breakdown cards -->
            <div class="row g-3">
              <div class="col-md-6 col-lg-4">
                <div class="border rounded-4 p-3 h-100 soft-card">
                  <div class="fw-semibold mb-2">OD Summary</div>
                  <div class="d-flex justify-content-between">
                    <span class="text-muted">Total OD</span>
                    <span class="fw-semibold">{{ formatNumber(animatedStats.od_count) }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span class="text-muted">Avg HC / OD</span>
                    <span class="fw-semibold">{{ avg(stats.hc_count, stats.od_count) }}</span>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="border rounded-4 p-3 h-100 soft-card">
                  <div class="fw-semibold mb-2">HC Summary</div>
                  <div class="d-flex justify-content-between">
                    <span class="text-muted">Total HC</span>
                    <span class="fw-semibold">{{ formatNumber(animatedStats.hc_count) }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span class="text-muted">Avg Villages / HC</span>
                    <span class="fw-semibold">{{ avg(stats.village_count, stats.hc_count) }}</span>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="border rounded-4 p-3 h-100 soft-card">
                  <div class="fw-semibold mb-2">Traffic Summary</div>
                  <div class="d-flex justify-content-between">
                    <span class="text-muted">Total Visitors</span>
                    <span class="fw-semibold">{{ formatNumber(animatedStats.visitor_count) }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span class="text-muted">Visitors / User</span>
                    <span class="fw-semibold">{{ visitorsPerUser }}</span>
                  </div>
                </div>
              </div>
            </div>

          </div><!-- card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DoughnutController, ArcElement, Tooltip, Legend,} from "chart.js";
import { Chart } from "chart.js/auto";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);


export default {
  name: "DashboardSample",
  data() {
    return {
      loading: false,
      pieChart: null,

      filters: {
        range: "30",
        from: "",
        to: "",
      },

      // KPI totals (real values)
      stats: {
        province_count: 0,
        od_count: 0,
        hc_count: 0,
        village_count: 0,

      },

      // animated numbers shown on UI
      animatedStats: {
        province_count: 0,
        od_count: 0,
        hc_count: 0,
        village_count: 0,
      },

      provinces: [],
      healthCenters: [],

      topProvinceMetric: "hc_count",
      topHCMetric: "visitor_count",

      kpis: [
        { key: "province_count", label: "Provinces" },
        { key: "od_count", label: "OD" },
        { key: "hc_count", label: "HC" },
        { key: "village_count", label: "Villages" },
        { key: "user_count", label: "Users" },
        { key: "visitor_count", label: "Visitors" },
      ],
    };
  },

  computed: {
    topProvincesComputed() {
      return [...this.provinces]
        .sort((a, b) => (b[this.topProvinceMetric] || 0) - (a[this.topProvinceMetric] || 0))
        .slice(0, 5);
    },

    topHCComputed() {
      return [...this.healthCenters]
        .sort((a, b) => (b[this.topHCMetric] || 0) - (a[this.topHCMetric] || 0))
        .slice(0, 5);
    },

    visitorsPerUser() {
      const u = Number(this.stats.user_count || 0);
      const v = Number(this.stats.visitor_count || 0);
      if (!u) return "0";
      return (v / u).toFixed(2);
    },
  },

  mounted() {
    this.setDefaultDates();
    this.loadDashboard();

  },

  methods: {
    renderPieChart() {
      const ctx = this.$refs.pieCanvas;
      this.pieChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["OD", "HC", "Villages", "Users", "Visitors"],
          datasets: [{
            data: [100, 200, 500, 300, 900]
          }]
        }
      })
    },

    setDefaultDates() {
      const today = new Date();
      const to = new Date(today);
      const from = new Date(today);

      const days = Number(this.filters.range || 30);
      from.setDate(from.getDate() - days);

      this.filters.from = from.toISOString().slice(0, 10);
      this.filters.to = to.toISOString().slice(0, 10);
    },

    async loadDashboard() {
      this.loading = true;

      try {
        // Real app:
        // const res = await axios.get("/api/dashboard", { params: this.filters });
        // const data = res.data;

        const data = this.fakeDashboardResponse();

        this.stats = data.stats;
        this.provinces = data.provinces;
        this.healthCenters = data.health_centers;

        // animate KPI numbers
        this.animateAllStats();

        // update chart
        this.$nextTick(() => this.renderOrUpdatePie());
      } finally {
        this.loading = false;
      }
    },

    animateAllStats() {
      const keys = Object.keys(this.stats);
      keys.forEach((k) => this.animateNumber(k, this.stats[k]));
    },

    animateNumber(key, target) {
      const start = Number(this.animatedStats[key] || 0);
      const end = Number(target || 0);

      const durationMs = 700;
      const startTime = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / durationMs);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        this.animatedStats[key] = Math.round(start + (end - start) * eased);

        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    },

    renderOrUpdatePie() {
      const canvas = this.$refs.pieCanvas;
      if (!canvas) return;

      const dataValues = [
        Number(this.stats.od_count || 0),
        Number(this.stats.hc_count || 0),
        Number(this.stats.village_count || 0),
        Number(this.stats.user_count || 0),
        Number(this.stats.visitor_count || 0),
      ];

      const data = {
        labels: ["OD", "HC", "Villages", "Users", "Visitors"],
        datasets: [
          {
            data: dataValues,
            // No custom colors requested; Chart.js defaults will apply.
            // If you want specific colors later, tell me your palette.
          },
        ],
      };

      if (this.pieChart) {
        this.pieChart.data = data;
        this.pieChart.update();
        return;
      }

      this.pieChart = new Chart(canvas.getContext("2d"), {
        type: "doughnut",
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 700 },
          plugins: {
            legend: { position: "bottom" },
            tooltip: { enabled: true },
          },
          cutout: "62%",
        },
      });
    },

    fakeDashboardResponse() {
      return {
        stats: {
          province_count: 25,
          od_count: 103,
          hc_count: 1450,
          village_count: 14320,
          user_count: 9820,
          visitor_count: 88210,
        },
        provinces: [
          { id: 1, name: "Phnom Penh", od_count: 10, hc_count: 120, village_count: 300, user_count: 2300, visitor_count: 21000 },
          { id: 2, name: "Siem Reap", od_count: 8, hc_count: 110, village_count: 890, user_count: 1200, visitor_count: 15000 },
          { id: 3, name: "Battambang", od_count: 7, hc_count: 100, village_count: 1100, user_count: 980, visitor_count: 9200 },
          { id: 4, name: "Kampong Cham", od_count: 6, hc_count: 95, village_count: 1200, user_count: 870, visitor_count: 8800 },
          { id: 5, name: "Kandal", od_count: 6, hc_count: 90, village_count: 1150, user_count: 820, visitor_count: 8600 },
          { id: 6, name: "Takeo", od_count: 5, hc_count: 70, village_count: 980, user_count: 610, visitor_count: 6900 },
        ],
        health_centers: [
          { id: 101, name: "HC A", province_name: "Phnom Penh", village_count: 15, user_count: 320, visitor_count: 5500 },
          { id: 102, name: "HC B", province_name: "Siem Reap", village_count: 22, user_count: 210, visitor_count: 4300 },
          { id: 103, name: "HC C", province_name: "Battambang", village_count: 18, user_count: 180, visitor_count: 3900 },
          { id: 104, name: "HC D", province_name: "Kampong Cham", village_count: 20, user_count: 160, visitor_count: 3600 },
          { id: 105, name: "HC E", province_name: "Kandal", village_count: 25, user_count: 140, visitor_count: 3300 },
          { id: 106, name: "HC F", province_name: "Takeo", village_count: 19, user_count: 120, visitor_count: 2800 },
        ],
      };
    },

    provinceMetricLabel(key) {
      const map = {
        od_count: "OD",
        hc_count: "HC",
        village_count: "Villages",
        user_count: "Users",
        visitor_count: "Visitors",
      };
      return map[key] || key;
    },

    hcMetricLabel(key) {
      const map = {
        visitor_count: "Visitors",
        user_count: "Users",
        village_count: "Villages",
      };
      return map[key] || key;
    },

    formatNumber(n) {
      const num = Number(n || 0);
      return new Intl.NumberFormat().format(num);
    },

    avg(a, b) {
      const A = Number(a || 0);
      const B = Number(b || 0);
      if (!B) return "0";
      return (A / B).toFixed(2);
    },
  },

  watch: {
    "filters.range"() {
      this.setDefaultDates();
    },

    // If stats change from API, refresh chart + animate
    stats: {
      deep: true,
      handler() {
        this.animateAllStats();
        this.$nextTick(() => this.renderOrUpdatePie());
      },
    },
  },

  beforeUnmount() {
    if (this.pieChart) {
      this.pieChart.destroy();
      this.pieChart = null;
    }
  },
};
</script>

<style scoped>
/* Header */
.header-gradient {
  border: 0;
  background: linear-gradient(to bottom, #f7f1b5, #fffef7);
  
}
.title-dashboard{
  font-weight: bold;
  font-size: 30px;
}
/* Logo */
.logo {
  width: 60px;  
  margin-bottom: 15px;
}

/* Card */
.glass-card {
  border: 0;
  border-radius: 18px;
  overflow: hidden;
}

/* Smooth entrance */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.35s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* KPI */
.kpi-card {
  position: relative;
  border-radius: 16px;
  background-color: #fffef7;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  overflow: hidden;
}
.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}
.kpi-glow {
  position: absolute;
  inset: -40px;
  pointer-events: none;
}

/* Sections */
.soft-card {
  background: #fff;
  border-color: rgba(0, 0, 0, 0.06) !important;
  border-radius: 18px !important;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.soft-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.07);
}

.row-hover:hover {
  background: rgba(0, 0, 0, 0.03);
}

/* Buttons */
.btn-animated {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.btn-animated:hover {
  transform: translateY(-1px);
}

/* Chart sizing */
.chart-wrap {
  position: relative;
  height: 260px;
}
</style>