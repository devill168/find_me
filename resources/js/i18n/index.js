import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    menu: {
      title: 'Ministry Of Health',
      home: 'Home',
      find_location: 'Find Location',
      location: 'Address',
      provinces: 'Provinces',
      districts: 'Districts',
      commune: 'Commune',
      od: 'OD',
      hc: 'HC',
      villages: 'Villages',
      management: 'Management',
      users: 'Users',
      roles: 'Roles',
      setting: 'Setting',
      language: 'Language',
      darkMode: 'Dark Mode',
      logout: 'Logout',
    },

    login: {
      title: "Login",
      username: "Username",
      password: "Password",
      email: "Email",
      enterUsername: "Enter username",
      enterPassword: "Enter password",
      enterEmail: "Enter your email",
      forgotPassword: "Forgot Password?",
      forgotPasswordTitle: "Forgot Password",
      forgotPasswordDescription: "Please enter your email address. We will help you reset your password.",
      needHelp: "Need Help?",
      helpMessage1: "Username and password can be provided by MOH",
      helpMessage2: "*** IT Technical Support ***",
      phone: "Phone",
      telegram: "Telegram",
      gmail: "Gmail",
      signIn: "Sign In",
      signingIn: "Signing In...",
      sending: "Sending...",
      sendResetLink: "Send Reset Link",
      sendingResetLink: "Sending reset link...",
      loggingIn: "Logging in",
      success: "Success",
      error: "Error",
      ok: "OK",
      close: "Close",
      loginFailed: "Login failed. Please check username/password or server problem.",
      resetLinkSent: "Reset link sent successfully.",
      resetLinkFailed: "Failed to send reset link."
    },

    user: {
      title: 'User List',
      createButton: 'Create User',
      titleForm: 'User Form',
      editTitle: 'Edit User',
      search: 'Search ....!',
      no: 'No',
      image: 'Image',
      gender: 'Gender',
      username: 'Username',
      email: 'Email',
      phone: 'Phone',
      role: 'Role',
      status: 'Status',
      action: 'Action',
      edit: 'Edit',
      delete: 'Delete',
      active: 'Active',
      inactive: 'Inactive',
      suspended: 'Suspended',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      newPassword: 'New Password',
      changePassword: 'Change password',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      selectRole: 'Select Role',
      cancel: 'Cancel',
      save: 'Save',
      update: 'Update',
      ok: 'OK',
      noData: 'No users found',
      imageFormat: 'PNG/JPG/WebP',
      minPassword: 'Min 6 characters',
      passwordMismatch: 'Password and Confirm Password do not match.',
      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will be deleted. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',
    },

    role: {
      title: 'Role Form',
      createButton: 'Create Role',
      tableId: 'ID',
      tableRole: 'Role',
      tableDescription: 'Description',
      tableAction: 'Action',
      noData: 'No roles found',

      createTitle: 'Role Form',
      editTitle: 'Edit Role',

      roleLabel: 'Role',
      descriptionLabel: 'Description',

      cancel: 'Cancel',
      save: 'Save',
      update: 'Update',

      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will be deleted. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',

      loadFailed: 'Load Failed',
      loadFailedMessage: 'Failed to load roles',

      validationError: 'Validation Error',
      roleRequired: 'Role name is required',
      validationMessage: 'Validation error',

      success: 'Success',
      createdSuccess: 'Created successfully!',
      updatedSuccess: 'Updated successfully!',

      createFailed: 'Create Failed',
      createFailedMessage: 'Failed to create role',

      updateFailed: 'Update Failed',
      updateFailedMessage: 'Failed to update role',

      deletedTitle: 'Deleted',
      deletedSuccess: 'Deleted successfully!',

      deleteFailed: 'Delete Failed',
      deleteFailedMessage: 'Failed to delete role',
    },

    find_location: {
      title: 'Find Location Form',
      subtitle: 'Filter location by Province, District, Commune, OD, HC and Village',
      reset: 'Reset',
      databaseStyle: 'Please fillter data',

      province: 'Province',
      district: 'District',
      commune: 'Commune',
      od: 'OD',
      hc: 'HC',
      village: 'Village',

      selectProvince: 'Select Province',
      selectDistrict: 'Select District',
      selectCommune: 'Select Commune',
      selectOD: 'Select OD',
      selectHC: 'Select HC',
      selectVillage: 'Select Village',

      search: 'Search',
      picture: 'Picture',
      clear: 'Clear',

      selectedResult: 'Selected Result',
      currentSearch: 'Current Search',

      googleMap: 'Google Map',
      locationLoaded: 'Location Loaded',
      noLocation: 'No Location',

      locationPicture: 'Location Picture',
      imageLoaded: 'Image Loaded',
      noImage: 'No Image',
      locationImage: 'Location Image',

      noMapData: 'No map data found. Please select a location and click',
      noImageFoundMessage: 'No image found from HC or OD. Please select',
      andClick: 'and click',
      or: 'or',

      pleaseSelectLocationFilter: 'Please select location filter',
      locationFoundSuccessfully: 'Location found successfully',
      noCoordinatesFound: '⚠ No location coordinates found for this selection.',
      loadGoogleMapFailed: 'Load google map failed',
      imageLoadedSuccessfully: 'Image loaded successfully',
      noImageFound: 'No image found from HC or OD',
      loadPictureFailed: 'Load picture failed',
      filterResetSuccessfully: 'Filter reset successfully',
    },
    province: {
      title: 'Province Form',
      createButton: 'Create Province',
      tableId: 'ID',
      provinceNameEn: 'Province_Name EN',
      provinceNameKh: 'Province_Name KH',
      provinceCode: 'Province_Code',
      latitude: 'Latitude',
      longitude: 'Longitude',
      action: 'Action',
      edit: 'Edit',
      delete: 'Delete',
      noData: 'No provinces found',

      createTitle: 'Form Province',
      editTitle: 'Edit Province',

      provinceNameEnLabel: 'Province Name EN',
      provinceNameKhLabel: 'Province Name KH',
      provinceCodeLabel: 'Province Code',
      latitudeLabel: 'Latitude',
      longitudeLabel: 'Longitude',

      provinceNameEnPlaceholder: 'Enter province name in English',
      provinceNameKhPlaceholder: 'Enter province name in Khmer',
      provinceCodePlaceholder: 'Auto generated province code',
      latitudePlaceholder: 'Latitude',
      longitudePlaceholder: 'Longitude',

      getCurrentLocation: 'Get Current Location',
      mapTitle: 'Location on Map',
      mapNote: 'Click on the map or drag marker to select latitude and longitude.',

      cancel: 'Cancel',
      save: 'Save',
      saving: 'Saving...',
      update: 'Update',
      updating: 'Updating...',
      ok: 'OK',

      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will delete. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',

      loadFailed: 'Load Failed',
      loadFailedMessage: 'Failed to load provinces',

      validationError: 'Validation Error',
      fillRequired: 'Please fill all required fields',
      validationMessage: 'Validation error',

      success: 'Success',
      createdSuccess: 'Created successfully!',
      updatedSuccess: 'Updated successfully!',

      createFailed: 'Create Failed',
      createFailedMessage: 'Failed to create province',

      updateFailed: 'Update Failed',
      updateFailedMessage: 'Failed to update province',

      deletedTitle: 'Deleted',
      deletedSuccess: 'Deleted successfully!',

      deleteFailed: 'Delete Failed',
      deleteFailedMessage: 'Failed to delete province',

      openFormFailed: 'Open Form Failed',
      openFormFailedMessage: 'Failed to open province form',

      mapError: 'Map Error',
      mapErrorMessage: 'Failed to load Google Maps',

      geolocationError: 'Geolocation Error',
      geolocationNotSupported: 'Geolocation is not supported by this browser.',

      locationError: 'Location Error',
      unableToGetLocation: 'Unable to get current location.',
      permissionDenied: 'Permission denied. Please allow location access.',
      locationUnavailable: 'Location unavailable.',
      locationTimeout: 'Location request timed out.',

      loading: 'Loading ...!',
    },
    distric: {
      title: 'District Form',
      createButton: 'Create District',
      tableId: 'ID',
      province: 'Province',
      districtNameEn: 'District_Name EN',
      districtNameKh: 'District_Name KH',
      districtCode: 'District_Code',
      latitude: 'Latitude',
      longitude: 'Longitude',
      action: 'Action',
      edit: 'Edit',
      delete: 'Delete',
      noData: 'No districts found',

      createTitle: 'Form District',
      editTitle: 'Edit District',

      selectProvince: 'Select Province',
      selectProvinceOption: '-- Select Province --',

      districtNameEnLabel: 'District Name EN',
      districtNameKhLabel: 'District Name KH',
      districtCodeLabel: 'District Code',
      latitudeLabel: 'Latitude',
      longitudeLabel: 'Longitude',

      districtNameEnPlaceholder: 'Enter district name in English',
      districtNameKhPlaceholder: 'Enter district name in Khmer',
      districtCodePlaceholder: 'Auto generate District code',
      latitudePlaceholder: 'Latitude',
      longitudePlaceholder: 'Longitude',

      getCurrentLocation: 'Get Current Location',
      mapTitle: 'Location on Map',
      mapNote: 'Click on the map or drag marker to select latitude and longitude.',

      cancel: 'Cancel',
      save: 'Save',
      update: 'Update',
      ok: 'OK',

      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will be deleted. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',

      loadFailed: 'Load Failed',
      loadProvinceFailedMessage: 'Failed to load provinces',
      loadDistrictFailedMessage: 'Failed to load districts',

      validationError: 'Validation Error',
      fillRequired: 'Please fill all required fields',
      validationMessage: 'Validation error',

      success: 'Success',
      createdSuccess: 'Created successfully!',
      updatedSuccess: 'Updated successfully!',

      createFailed: 'Create Failed',
      createFailedMessage: 'Failed to create district',

      updateFailed: 'Update Failed',
      updateFailedMessage: 'Failed to update district',

      deletedTitle: 'Deleted',
      deletedSuccess: 'Deleted successfully!',

      deleteFailed: 'Delete Failed',
      deleteFailedMessage: 'Failed to delete district',

      mapError: 'Map Error',
      mapErrorMessage: 'Failed to load Google Maps',

      geolocationError: 'Geolocation Error',
      geolocationNotSupported: 'Geolocation is not supported by this browser.',

      locationError: 'Location Error',
      unableToGetLocation: 'Unable to get current location.',
      permissionDenied: 'Permission denied. Please allow location access.',
      locationUnavailable: 'Location unavailable.',
      locationTimeout: 'Location request timed out.',

      codeError: 'Code Error',
      codeErrorMessage: 'Failed to generate district code',

      loading: 'Loading ...!',
    },
    commune: {
      title: 'Commune Form',
      createButton: 'Create Commune',
      tableId: 'ID',
      province: 'Province',
      district: 'District',
      communeNameEn: 'Commune_Name EN',
      communeNameKh: 'Commune_Name KH',
      communeCode: 'Commune_Code',
      latitude: 'Latitude',
      longitude: 'Longitude',
      action: 'Action',
      edit: 'Edit',
      delete: 'Delete',
      noData: 'No communes found',

      createTitle: 'Form Commune',
      editTitle: 'Edit Commune',

      selectProvince: 'Select Province',
      selectProvinceOption: '-- Select Province --',
      selectDistrict: 'Select District',
      selectDistrictOption: '-- Select District --',

      communeNameEnLabel: 'Commune Name EN',
      communeNameKhLabel: 'Commune Name KH',
      communeCodeLabel: 'Commune Code',
      latitudeLabel: 'Latitude',
      longitudeLabel: 'Longitude',

      communeNameEnPlaceholder: 'Enter commune name in English',
      communeNameKhPlaceholder: 'Enter commune name in Khmer',
      communeCodePlaceholder: 'Auto generate commune code',
      latitudePlaceholder: 'Latitude',
      longitudePlaceholder: 'Longitude',

      getCurrentLocation: 'Get Current Location',
      mapTitle: 'Location on Map',
      mapNote: 'Click on the map or drag marker to select latitude and longitude.',

      cancel: 'Cancel',
      save: 'Save',
      update: 'Update',
      ok: 'OK',

      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will be deleted. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',

      loadFailed: 'Load Failed',
      loadProvinceFailedMessage: 'Failed to load provinces',
      loadDistrictFailedMessage: 'Failed to load districts',
      loadCommuneFailedMessage: 'Failed to load communes',

      validationError: 'Validation Error',
      fillRequired: 'Please fill all required fields',
      validationMessage: 'Validation error',

      success: 'Success',
      createdSuccess: 'Created successfully!',
      updatedSuccess: 'Updated successfully!',

      createFailed: 'Create Failed',
      createFailedMessage: 'Failed to create commune',

      updateFailed: 'Update Failed',
      updateFailedMessage: 'Failed to update commune',

      deletedTitle: 'Deleted',
      deletedSuccess: 'Deleted successfully!',

      deleteFailed: 'Delete Failed',
      deleteFailedMessage: 'Failed to delete commune',

      mapError: 'Map Error',
      mapErrorMessage: 'Failed to load Google Maps',

      geolocationError: 'Geolocation Error',
      geolocationNotSupported: 'Geolocation is not supported by this browser.',

      locationError: 'Location Error',
      unableToGetLocation: 'Unable to get current location.',
      permissionDenied: 'Permission denied. Please allow location access.',
      locationUnavailable: 'Location unavailable.',
      locationTimeout: 'Location request timed out.',

      codeError: 'Code Error',
      codeErrorMessage: 'Failed to generate commune code',

      loading: 'Loading ...!',
    },
    od: {
      title: 'Operational District Form',
      createButton: 'Create OD',

      tableId: 'ID',
      province: 'Province',
      district: 'District',
      commune: 'Commune',
      odNameEn: 'OD_Name EN',
      odNameKh: 'OD_Name KH',
      odCode: 'OD_Code',
      directorName: 'Director_Name',
      phone: 'Phone',
      latitude: 'Latitude',
      longitude: 'Longitude',
      image: 'Image',
      action: 'Action',
      edit: 'Edit',
      delete: 'Delete',
      noData: 'No OD found',

      createTitle: 'Form Operational District',
      editTitle: 'Edit OD',
      createSubtitle: 'Please fill in the operational district information',
      editSubtitle: 'Update the selected operational district information',

      sectionInfo: 'Operational District Information',
      sectionMap: 'Location on Map',

      selectProvince: 'Select Province',
      selectProvinceOption: '-- Select Province --',
      selectDistrict: 'Select District',
      selectDistrictOption: '-- Select District --',
      selectCommune: 'Select Commune',
      selectCommuneOption: '-- Select Commune --',

      odNameEnLabel: 'OD_Name EN',
      odNameKhLabel: 'OD_Name KH',
      odCodeLabel: 'OD_Code',
      odCodePlaceholder: 'Auto generate commune code',

      directorNameLabel: 'Director Name',
      directorNamePlaceholder: 'Enter director name',

      phoneLabel: 'Phone',
      phonePlaceholder: 'Enter phone number',

      imageLabel: 'Image',
      previewLabel: 'Preview',
      imageAlt: 'OD Image',
      previewAlt: 'Preview',
      removeImage: 'Remove image',

      latitudeLabel: 'Latitude',
      longitudeLabel: 'Longitude',

      getCurrentLocation: 'Get Current Location',
      mapNote: 'Click on the map or drag marker to select latitude and longitude.',

      cancel: 'Cancel',
      save: 'Save',
      update: 'Update',
      ok: 'OK',

      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will delete. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',

      loadFailed: 'Load Failed',
      loadProvinceFailedMessage: 'Failed to load provinces',
      loadDistrictFailedMessage: 'Failed to load districts',
      loadCommuneFailedMessage: 'Failed to load communes',
      loadODFailedMessage: 'Failed to load OD data',

      validationError: 'Validation Error',
      fillRequired: 'Please fill all required fields',
      validationMessage: 'Validation error',

      success: 'Success',
      createdSuccess: 'Created successfully!',
      updatedSuccess: 'Updated successfully!',

      createFailed: 'Create Failed',
      createFailedMessage: 'Failed to create OD',

      updateFailed: 'Update Failed',
      updateFailedMessage: 'Failed to update OD',

      deletedTitle: 'Deleted',
      deletedSuccess: 'Deleted successfully!',

      deleteFailed: 'Delete Failed',
      deleteFailedMessage: 'Failed to delete OD',

      mapError: 'Map Error',
      mapErrorMessage: 'Failed to load Google Maps',

      geolocationError: 'Geolocation Error',
      geolocationNotSupported: 'Geolocation is not supported by this browser.',

      locationError: 'Location Error',
      unableToGetLocation: 'Unable to get current location.',
      permissionDenied: 'Permission denied. Please allow location access.',
      locationUnavailable: 'Location unavailable.',
      locationTimeout: 'Location request timed out.',

      loading: 'Loading ...!',
    },
    hc: {
      title: 'Health Center Form',
      createButton: 'Create Health Center',

      tableId: 'ID',
      province: 'Province',
      district: 'District',
      commune: 'Commune',
      od: 'OD',
      hcNameEn: 'HC_Name EN',
      hcNameKh: 'HC_Name KH',
      hcCode: 'HC_Code',
      directorName: 'Director_Name',
      phone: 'Phone',
      latitude: 'Latitude',
      longitude: 'Longitude',
      image: 'Image',
      action: 'Action',
      edit: 'Edit',
      delete: 'Delete',
      noData: 'No Health Center found',

      createTitle: 'Form Health Center',
      editTitle: 'Edit Health Center',
      createSubtitle: 'Please fill in the health center information',
      editSubtitle: 'Update the selected health center information',

      sectionInfo: 'Health Center Information',
      sectionMap: 'Location on Map',

      selectProvince: 'Select Province',
      selectProvinceOption: '-- Select Province --',
      selectDistrict: 'Select District',
      selectDistrictOption: '-- Select District --',
      selectCommune: 'Select Commune',
      selectCommuneOption: '-- Select Commune --',
      selectOD: 'Select OD',
      selectODOption: '-- Select OD --',

      hcNameEnLabel: 'Health Center_Name EN',
      hcNameKhLabel: 'Health Center_Name KH',
      hcCodeLabel: 'HC_Code',
      hcCodePlaceholder: 'Auto generate HC_Code',

      directorNameLabel: 'Director Name',
      directorNamePlaceholder: 'Enter director name',

      phoneLabel: 'Phone',
      phonePlaceholder: 'Enter phone number',

      imageLabel: 'Image',
      previewLabel: 'Preview',
      imageAlt: 'HC Image',
      previewAlt: 'Preview',
      removeImage: 'Remove image',

      latitudeLabel: 'Latitude',
      longitudeLabel: 'Longitude',

      getCurrentLocation: 'Get Current Location',
      mapNote: 'Click on the map or drag marker to select latitude and longitude.',

      cancel: 'Cancel',
      save: 'Save',
      update: 'Update',
      ok: 'OK',

      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will delete. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',

      loadFailed: 'Load Failed',
      loadProvinceFailedMessage: 'Failed to load provinces',
      loadDistrictFailedMessage: 'Failed to load districts',
      loadCommuneFailedMessage: 'Failed to load communes',
      loadODFailedMessage: 'Failed to load ODs',
      loadHCFailedMessage: 'Failed to load health center data',

      validationError: 'Validation Error',
      fillRequired: 'Please fill all required fields',
      validationMessage: 'Validation error',

      success: 'Success',
      createdSuccess: 'Created successfully!',
      updatedSuccess: 'Updated successfully!',

      createFailed: 'Create Failed',
      createFailedMessage: 'Failed to create health center',

      updateFailed: 'Update Failed',
      updateFailedMessage: 'Failed to update health center',

      deletedTitle: 'Deleted',
      deletedSuccess: 'Deleted successfully!',

      deleteFailed: 'Delete Failed',
      deleteFailedMessage: 'Failed to delete health center',

      mapError: 'Map Error',
      mapErrorMessage: 'Failed to load Google Maps',

      geolocationError: 'Geolocation Error',
      geolocationNotSupported: 'Geolocation is not supported by this browser.',

      locationError: 'Location Error',
      unableToGetLocation: 'Unable to get current location.',
      permissionDenied: 'Permission denied. Please allow location access.',
      locationUnavailable: 'Location unavailable.',
      locationTimeout: 'Location request timed out.',

      codeError: 'Code Error',
      codeErrorMessage: 'Failed to generate HC code',

      loading: 'Loading ...!',
    },
    village: {
      title: 'Village Form',
      createButton: 'Create Village',

      tableId: 'ID',
      province: 'Province',
      district: 'District',
      commune: 'Commune',
      od: 'OD',
      hc: 'HC',
      villageNameEn: 'Village_Name EN',
      villageNameKh: 'Village_Name KH',
      villageCode: 'Village_Code',
      latitude: 'Latitude',
      longitude: 'Longitude',
      action: 'Action',
      edit: 'Edit',
      delete: 'Delete',
      noData: 'No Village found',

      createTitle: 'Form Village',
      editTitle: 'Edit Village',
      createSubtitle: 'Please fill in the village information',
      editSubtitle: 'Update the selected village information',

      sectionInfo: 'Village Information',
      sectionMap: 'Location on Map',

      selectProvince: 'Select Province',
      selectProvinceOption: '-- Select Province --',
      selectDistrict: 'Select District',
      selectDistrictOption: '-- Select District --',
      selectCommune: 'Select Commune',
      selectCommuneOption: '-- Select Commune --',
      selectOD: 'Select OD',
      selectODOption: '-- Select OD --',
      selectHC: 'Select HC',
      selectHCOption: '-- Select HC --',

      villageNameEnLabel: 'Village_Name EN',
      villageNameKhLabel: 'Village_Name KH',
      villageCodeLabel: 'Village_Code',

      villageNameEnPlaceholder: 'Enter village name in English',
      villageNameKhPlaceholder: 'Enter village name in Khmer',

      latitudeLabel: 'Latitude',
      longitudeLabel: 'Longitude',

      getCurrentLocation: 'Get Current Location',
      mapNote: 'Click on the map or drag marker to select latitude and longitude.',

      cancel: 'Cancel',
      save: 'Save',
      update: 'Update',
      ok: 'OK',

      confirmDeleteTitle: 'Confirm Delete',
      confirmDeleteMessage: 'This data will delete. Are you sure?',
      confirmDeleteButton: 'Yes, Delete',

      loadFailed: 'Load Failed',
      loadProvinceFailedMessage: 'Failed to load provinces',
      loadDistrictFailedMessage: 'Failed to load districts',
      loadCommuneFailedMessage: 'Failed to load communes',
      loadODFailedMessage: 'Failed to load ODs',
      loadHCFailedMessage: 'Failed to load health centers',
      loadVillageFailedMessage: 'Failed to load village data',

      validationError: 'Validation Error',
      fillRequired: 'Please fill all required fields',
      validationMessage: 'Validation error',

      success: 'Success',
      createdSuccess: 'Created successfully!',
      updatedSuccess: 'Updated successfully!',

      createFailed: 'Create Failed',
      createFailedMessage: 'Failed to create village',

      updateFailed: 'Update Failed',
      updateFailedMessage: 'Failed to update village',

      deletedTitle: 'Deleted',
      deletedSuccess: 'Deleted successfully!',

      deleteFailed: 'Delete Failed',
      deleteFailedMessage: 'Failed to delete village',

      mapError: 'Map Error',
      mapErrorMessage: 'Failed to load Google Maps',

      geolocationError: 'Geolocation Error',
      geolocationNotSupported: 'Geolocation is not supported by this browser.',

      locationError: 'Location Error',
      unableToGetLocation: 'Unable to get current location.',
      permissionDenied: 'Permission denied. Please allow location access.',
      locationUnavailable: 'Location unavailable.',
      locationTimeout: 'Location request timed out.',

      codeError: 'Code Error',
      codeErrorMessage: 'Failed to generate village code',

      loading: 'Loading ...!',
    },
  },

  km: {
    menu: {
      title: 'ក្រសួងសុខាភិបាល',
      home: 'ទំព័រដើម',
      find_location: 'ស្វែងរកទីតាំង',
      location: 'ទីតាំង',
      provinces: 'ខេត្ត',
      districts: 'ក្រុង/ស្រុក',
      commune: 'ឃុំ/សង្កាត់',
      od: 'ការិ.ស្រុកប្រតិបត្តិ',
      hc: 'មូលដ្ឋានសុខាភិបាល',
      villages: 'ភូមិ',
      management: 'ការគ្រប់គ្រង',
      users: 'អ្នកប្រើប្រាស់',
      roles: 'តួនាទី',
      setting: 'ការកំណត់',
      language: 'ភាសា',
      darkMode: 'ផ្ទៃងងឹត',
      logout: 'ចាកចេញ',
    },

    login: {
      title: "ចូលគណនី",
      username: "ឈ្មោះគណនី",
      password: "ពាក្យសម្ងាត់",
      email: "អ៊ីមែល",
      enterUsername: "បញ្ចូលឈ្មោះគណនី",
      enterPassword: "បញ្ចូលពាក្យសម្ងាត់",
      enterEmail: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
      forgotPassword: "ភ្លេចពាក្យសម្ងាត់?",
      forgotPasswordTitle: "ភ្លេចពាក្យសម្ងាត់",
      forgotPasswordDescription: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក។ យើងនឹងជួយអ្នកកំណត់ពាក្យសម្ងាត់ឡើងវិញ។",
      needHelp: "ត្រូវការជំនួយ?",
      helpMessage1: "ឈ្មោះគណនី និង ពាក្យសម្ងាត់ អាចទទួលបានពី",
      helpMessage2: "*** ក្រុមគាំទ្របច្ចេកទេស IT ***",
      phone: "ទូរស័ព្ទ",
      telegram: "តេលេក្រាម",
      gmail: "អ៊ីមែល",
      signIn: "ចូលគណនី",
      signingIn: "កំពុងចូលគណនី...",
      sending: "កំពុងផ្ញើ...",
      sendResetLink: "ផ្ញើតំណកំណត់ពាក្យសម្ងាត់ឡើងវិញ",
      sendingResetLink: "កំពុងផ្ញើតំណកំណត់ពាក្យសម្ងាត់ឡើងវិញ...",
      loggingIn: "កំពុងចូលគណនី",
      success: "ជោគជ័យ",
      error: "កំហុស",
      ok: "យល់ព្រម",
      close: "បិទ",
      loginFailed: "ការចូលគណនីបរាជ័យ។ សូមពិនិត្យឈ្មោះគណនី/ពាក្យសម្ងាត់ ឬ បញ្ហាម៉ាស៊ីនមេ។",
      resetLinkSent: "បានផ្ញើតំណកំណត់ពាក្យសម្ងាត់ឡើងវិញដោយជោគជ័យ។",
      resetLinkFailed: "មិនអាចផ្ញើតំណកំណត់ពាក្យសម្ងាត់ឡើងវិញបានទេ។"
    },

    user: {
      title: 'តារាងអ្នកប្រើប្រាស់',
      createButton: 'បង្កើតអ្នកប្រើប្រាស់',
      titleForm: 'ទម្រង់បញ្ចូលទិន្នន័យអ្នកប្រើប្រាស់',
      editTitle: 'កែប្រែអ្នកប្រើប្រាស់',
      search: 'ស្វែងរក ....!',
      no: 'ល.រ',
      image: 'រូបភាព',
      gender: 'ភេទ',
      username: 'ឈ្មោះគណនី',
      email: 'អ៊ីម៉ែល',
      phone: 'លេខទូរស័ព្ទ',
      role: 'តួនាទី',
      status: 'ស្ថានភាព',
      action: 'សកម្មភាព',
      edit: 'កែប្រែ',
      delete: 'លុប',
      active: 'សកម្ម',
      inactive: 'អសកម្ម',
      suspended: 'ផ្អាក',
      password: 'ពាក្យសម្ងាត់',
      confirmPassword: 'បញ្ជាក់ពាក្យសម្ងាត់',
      newPassword: 'ពាក្យសម្ងាត់ថ្មី',
      changePassword: 'ប្ដូរពាក្យសម្ងាត់',
      male: 'ប្រុស',
      female: 'ស្រី',
      other: 'ផ្សេងទៀត',
      selectRole: 'ជ្រើសរើសតួនាទី',
      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      update: 'កែប្រែ',
      ok: 'យល់ព្រម',
      noData: 'មិនមានអ្នកប្រើប្រាស់',
      imageFormat: 'PNG/JPG/WebP',
      minPassword: 'យ៉ាងតិច 6 តួអក្សរ',
      passwordMismatch: 'ពាក្យសម្ងាត់ និង ការបញ្ជាក់ពាក្យសម្ងាត់មិនត្រូវគ្នា។',
      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',
    },

    role: {
      title: 'ទម្រង់បញ្ចូលទិន្នន័យតួនាទី',
      createButton: 'បង្កើតតួនាទី',
      tableId: 'ល.រ',
      tableRole: 'តួនាទី',
      tableDescription: 'ការពិពណ៌នា',
      tableAction: 'សកម្មភាព',
      noData: 'មិនមានទិន្នន័យតួនាទី',
      createTitle: 'ទម្រង់បញ្ចូលទិន្នន័យតួនាទី',
      editTitle: 'កែប្រែតួនាទី',
      roleLabel: 'តួនាទី',
      descriptionLabel: 'ការពិពណ៌នា',
      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      update: 'កែប្រែ',
      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',
      loadFailed: 'ផ្ទុកបរាជ័យ',
      loadFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យតួនាទីបានទេ',
      validationError: 'កំហុសទិន្នន័យ',
      roleRequired: 'សូមបញ្ចូលឈ្មោះតួនាទី',
      validationMessage: 'ទិន្នន័យមិនត្រឹមត្រូវ',
      success: 'ជោគជ័យ',
      createdSuccess: 'បង្កើតបានជោគជ័យ!',
      updatedSuccess: 'កែប្រែបានជោគជ័យ!',
      createFailed: 'បង្កើតបរាជ័យ',
      createFailedMessage: 'មិនអាចបង្កើតតួនាទីបានទេ',
      updateFailed: 'កែប្រែបរាជ័យ',
      updateFailedMessage: 'មិនអាចកែប្រែតួនាទីបានទេ',
      deletedTitle: 'បានលុប',
      deletedSuccess: 'លុបបានជោគជ័យ!',
      deleteFailed: 'លុបបរាជ័យ',
      deleteFailedMessage: 'មិនអាចលុបទិន្នន័យបានទេ',
    },

    find_location: {
      title: 'ទម្រង់ស្វែងរកទីតាំង',
      subtitle: 'ស្វែងរកទីតាំងតាម ខេត្ត ស្រុក/ក្រុង ឃុំ/សង្កាត់ ការិ.ស្រុកប្រតិបត្តិ មូលដ្ឋានសុខាភិបាល និង ភូមិ',
      reset: 'កំណត់ឡើងវិញ',
      formTitle: 'ទម្រង់តម្រងទីតាំង',
      databaseStyle: 'សូមជ្រើសរើសទិន្នន័យ ',

      province: 'ខេត្ត',
      district: 'ស្រុក/ក្រុង',
      commune: 'ឃុំ/សង្កាត់',
      od: 'ការិយាល័យស្រុកប្រតិបត្តិ',
      hc: 'មូលដ្ឋានសុខាភិបាល',
      village: 'ភូមិ',

      selectProvince: 'ជ្រើសរើសខេត្ត',
      selectDistrict: 'ជ្រើសរើសស្រុក/ក្រុង',
      selectCommune: 'ជ្រើសរើសឃុំ/សង្កាត់',
      selectOD: 'ជ្រើសរើសការិយាល័យស្រុកប្រតិបត្តិ',
      selectHC: 'ជ្រើសរើសមូលដ្ឋានសុខាភិបាល',
      selectVillage: 'ជ្រើសរើសភូមិ',

      search: 'ស្វែងរក',
      picture: 'រូបភាព',
      clear: 'សម្អាត',

      selectedResult: 'លទ្ធផលដែលបានជ្រើស',
      currentSearch: 'ការស្វែងរកបច្ចុប្បន្ន',

      googleMap: 'ផែនទី Google',
      locationLoaded: 'បានផ្ទុកទីតាំង',
      noLocation: 'គ្មានទីតាំង',

      locationPicture: 'រូបភាពទីតាំង',
      imageLoaded: 'បានផ្ទុករូបភាព',
      noImage: 'គ្មានរូបភាព',
      locationImage: 'រូបភាពទីតាំង',

      noMapData: 'មិនមានទិន្នន័យផែនទីទេ។ សូមជ្រើសរើសទីតាំង ហើយចុច',
      noImageFoundMessage: 'មិនមានរូបភាពពី HC ឬ OD ទេ។ សូមជ្រើសរើស',
      andClick: 'ហើយចុច',
      or: 'ឬ',

      pleaseSelectLocationFilter: 'សូមជ្រើសរើសតម្រងទីតាំង',
      locationFoundSuccessfully: 'រកឃើញទីតាំងដោយជោគជ័យ',
      noCoordinatesFound: '⚠ មិនមានកូអរដោនេទីតាំងសម្រាប់ជម្រើសនេះទេ។',
      loadGoogleMapFailed: 'ផ្ទុកផែនទី Google បរាជ័យ',
      imageLoadedSuccessfully: 'ផ្ទុករូបភាពដោយជោគជ័យ',
      noImageFound: 'មិនមានរូបភាពពី HC ឬ OD',
      loadPictureFailed: 'ផ្ទុករូបភាពបរាជ័យ',
      filterResetSuccessfully: 'បានកំណត់តម្រងឡើងវិញដោយជោគជ័យ',
    },
    province: {
      title: 'ទម្រង់បញ្ចូលទិន្នន័យខេត្ត',
      createButton: 'បង្កើតខេត្ត',
      tableId: 'ល.រ',
      provinceNameEn: 'ឈ្មោះខេត្ត (អង់គ្លេស)',
      provinceNameKh: 'ឈ្មោះខេត្ត (ខ្មែរ)',
      provinceCode: 'កូដខេត្ត',
      latitude: 'រយៈទទឹង',
      longitude: 'រយៈបណ្តោយ',
      action: 'សកម្មភាព',
      edit: 'កែប្រែ',
      delete: 'លុប',
      noData: 'មិនមានទិន្នន័យខេត្ត',

      createTitle: 'ទម្រង់បញ្ចូលទិន្នន័យខេត្ត',
      editTitle: 'កែប្រែខេត្ត',

      provinceNameEnLabel: 'ឈ្មោះខេត្តជាអង់គ្លេស',
      provinceNameKhLabel: 'ឈ្មោះខេត្តជាខ្មែរ',
      provinceCodeLabel: 'កូដខេត្ត',
      latitudeLabel: 'រយៈទទឹង',
      longitudeLabel: 'រយៈបណ្តោយ',

      provinceNameEnPlaceholder: 'បញ្ចូលឈ្មោះខេត្តជាអង់គ្លេស',
      provinceNameKhPlaceholder: 'បញ្ចូលឈ្មោះខេត្តជាខ្មែរ',
      provinceCodePlaceholder: 'កូដខេត្តបង្កើតស្វ័យប្រវត្តិ',
      latitudePlaceholder: 'រយៈទទឹង',
      longitudePlaceholder: 'រយៈបណ្តោយ',

      getCurrentLocation: 'យកទីតាំងបច្ចុប្បន្ន',
      mapTitle: 'ទីតាំងលើផែនទី',
      mapNote: 'ចុចលើផែនទី ឬ អូសសញ្ញាសម្គាល់ ដើម្បីជ្រើសរើសរយៈទទឹង និង រយៈបណ្តោយ។',

      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      saving: 'កំពុងរក្សាទុក...',
      update: 'កែប្រែ',
      updating: 'កំពុងកែប្រែ...',
      ok: 'យល់ព្រម',

      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',

      loadFailed: 'ផ្ទុកបរាជ័យ',
      loadFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យខេត្តបានទេ',

      validationError: 'កំហុសទិន្នន័យ',
      fillRequired: 'សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់',
      validationMessage: 'ទិន្នន័យមិនត្រឹមត្រូវ',

      success: 'ជោគជ័យ',
      createdSuccess: 'បង្កើតបានជោគជ័យ!',
      updatedSuccess: 'កែប្រែបានជោគជ័យ!',

      createFailed: 'បង្កើតបរាជ័យ',
      createFailedMessage: 'មិនអាចបង្កើតខេត្តបានទេ',

      updateFailed: 'កែប្រែបរាជ័យ',
      updateFailedMessage: 'មិនអាចកែប្រែខេត្តបានទេ',

      deletedTitle: 'បានលុប',
      deletedSuccess: 'លុបបានជោគជ័យ!',

      deleteFailed: 'លុបបរាជ័យ',
      deleteFailedMessage: 'មិនអាចលុបទិន្នន័យខេត្តបានទេ',

      openFormFailed: 'បើកទម្រង់បរាជ័យ',
      openFormFailedMessage: 'មិនអាចបើកទម្រង់ខេត្តបានទេ',

      mapError: 'កំហុសផែនទី',
      mapErrorMessage: 'មិនអាចផ្ទុក Google Maps បានទេ',

      geolocationError: 'កំហុសទីតាំង',
      geolocationNotSupported: 'កម្មវិធីរុករកនេះមិនគាំទ្រការកំណត់ទីតាំងទេ។',

      locationError: 'កំហុសទីតាំង',
      unableToGetLocation: 'មិនអាចយកទីតាំងបច្ចុប្បន្នបានទេ។',
      permissionDenied: 'បានបដិសេធសិទ្ធិ។ សូមអនុញ្ញាតឱ្យប្រើទីតាំង។',
      locationUnavailable: 'មិនមានទីតាំង។',
      locationTimeout: 'ការស្នើសុំទីតាំងអស់ពេល។',

      loading: 'សូមមេត្តារង់ចាំ ...!',
    },
    distric: {
      title: 'ទម្រង់បញ្ចូលទិន្នន័យស្រុករដ្ឋបាល',
      createButton: 'បង្កើតស្រុករដ្ឋបាល',
      tableId: 'ល.រ',
      province: 'ខេត្ត',
      districtNameEn: 'ឈ្មោះស្រុក (អង់គ្លេស)',
      districtNameKh: 'ឈ្មោះស្រុក (ខ្មែរ)',
      districtCode: 'កូដស្រុក',
      latitude: 'រយៈទទឹង',
      longitude: 'រយៈបណ្តោយ',
      action: 'សកម្មភាព',
      edit: 'កែប្រែ',
      delete: 'លុប',
      noData: 'មិនមានទិន្នន័យស្រុក',

      createTitle: 'ទម្រង់បញ្ចូលទិន្នន័យស្រុករដ្ឋបាល',
      editTitle: 'កែប្រែស្រុករដ្ឋបាល',

      selectProvince: 'ជ្រើសរើសខេត្ត',
      selectProvinceOption: '-- ជ្រើសរើសខេត្ត --',

      districtNameEnLabel: 'ឈ្មោះស្រុកជាអង់គ្លេស',
      districtNameKhLabel: 'ឈ្មោះស្រុកជាខ្មែរ',
      districtCodeLabel: 'កូដស្រុក',
      latitudeLabel: 'រយៈទទឹង',
      longitudeLabel: 'រយៈបណ្តោយ',

      districtNameEnPlaceholder: 'បញ្ចូលឈ្មោះស្រុកជាអង់គ្លេស',
      districtNameKhPlaceholder: 'បញ្ចូលឈ្មោះស្រុកជាខ្មែរ',
      districtCodePlaceholder: 'កូដស្រុកបង្កើតស្វ័យប្រវត្តិ',
      latitudePlaceholder: 'រយៈទទឹង',
      longitudePlaceholder: 'រយៈបណ្តោយ',

      getCurrentLocation: 'យកទីតាំងបច្ចុប្បន្ន',
      mapTitle: 'ទីតាំងលើផែនទី',
      mapNote: 'ចុចលើផែនទី ឬ អូសសញ្ញាសម្គាល់ ដើម្បីជ្រើសរើសរយៈទទឹង និង រយៈបណ្តោយ។',

      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      update: 'កែប្រែ',
      ok: 'យល់ព្រម',

      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',

      loadFailed: 'ផ្ទុកបរាជ័យ',
      loadProvinceFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យខេត្តបានទេ',
      loadDistrictFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យស្រុកបានទេ',

      validationError: 'កំហុសទិន្នន័យ',
      fillRequired: 'សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់',
      validationMessage: 'ទិន្នន័យមិនត្រឹមត្រូវ',

      success: 'ជោគជ័យ',
      createdSuccess: 'បង្កើតបានជោគជ័យ!',
      updatedSuccess: 'កែប្រែបានជោគជ័យ!',

      createFailed: 'បង្កើតបរាជ័យ',
      createFailedMessage: 'មិនអាចបង្កើតស្រុកបានទេ',

      updateFailed: 'កែប្រែបរាជ័យ',
      updateFailedMessage: 'មិនអាចកែប្រែស្រុកបានទេ',

      deletedTitle: 'បានលុប',
      deletedSuccess: 'លុបបានជោគជ័យ!',

      deleteFailed: 'លុបបរាជ័យ',
      deleteFailedMessage: 'មិនអាចលុបទិន្នន័យស្រុកបានទេ',

      mapError: 'កំហុសផែនទី',
      mapErrorMessage: 'មិនអាចផ្ទុក Google Maps បានទេ',

      geolocationError: 'កំហុសទីតាំង',
      geolocationNotSupported: 'កម្មវិធីរុករកនេះមិនគាំទ្រការកំណត់ទីតាំងទេ។',

      locationError: 'កំហុសទីតាំង',
      unableToGetLocation: 'មិនអាចយកទីតាំងបច្ចុប្បន្នបានទេ។',
      permissionDenied: 'បានបដិសេធសិទ្ធិ។ សូមអនុញ្ញាតឱ្យប្រើទីតាំង។',
      locationUnavailable: 'មិនមានទីតាំង។',
      locationTimeout: 'ការស្នើសុំទីតាំងអស់ពេល។',

      codeError: 'កំហុសកូដ',
      codeErrorMessage: 'មិនអាចបង្កើតកូដស្រុកបានទេ',

      loading: 'សូមមេត្តារង់ចាំ ...!',
    },
    commune: {
      title: 'ទម្រង់បញ្ចូលទិន្នន័យឃុំ/សង្កាត់',
      createButton: 'បង្កើតឃុំ/សង្កាត់',
      tableId: 'ល.រ',
      province: 'ខេត្ត',
      district: 'ស្រុក/ក្រុង',
      communeNameEn: 'ឈ្មោះឃុំ/សង្កាត់ (អង់គ្លេស)',
      communeNameKh: 'ឈ្មោះឃុំ/សង្កាត់ (ខ្មែរ)',
      communeCode: 'កូដឃុំ/សង្កាត់',
      latitude: 'រយៈទទឹង',
      longitude: 'រយៈបណ្តោយ',
      action: 'សកម្មភាព',
      edit: 'កែប្រែ',
      delete: 'លុប',
      noData: 'មិនមានទិន្នន័យឃុំ/សង្កាត់',

      createTitle: 'ទម្រង់បញ្ចូលទិន្នន័យឃុំ/សង្កាត់',
      editTitle: 'កែប្រែឃុំ/សង្កាត់',

      selectProvince: 'ជ្រើសរើសខេត្ត',
      selectProvinceOption: '-- ជ្រើសរើសខេត្ត --',
      selectDistrict: 'ជ្រើសរើសស្រុក/ក្រុង',
      selectDistrictOption: '-- ជ្រើសរើសស្រុក/ក្រុង --',

      communeNameEnLabel: 'ឈ្មោះឃុំ/សង្កាត់ជាអង់គ្លេស',
      communeNameKhLabel: 'ឈ្មោះឃុំ/សង្កាត់ជាខ្មែរ',
      communeCodeLabel: 'កូដឃុំ/សង្កាត់',
      latitudeLabel: 'រយៈទទឹង',
      longitudeLabel: 'រយៈបណ្តោយ',

      communeNameEnPlaceholder: 'បញ្ចូលឈ្មោះឃុំ/សង្កាត់ជាអង់គ្លេស',
      communeNameKhPlaceholder: 'បញ្ចូលឈ្មោះឃុំ/សង្កាត់ជាខ្មែរ',
      communeCodePlaceholder: 'កូដឃុំ/សង្កាត់បង្កើតស្វ័យប្រវត្តិ',
      latitudePlaceholder: 'រយៈទទឹង',
      longitudePlaceholder: 'រយៈបណ្តោយ',

      getCurrentLocation: 'យកទីតាំងបច្ចុប្បន្ន',
      mapTitle: 'ទីតាំងលើផែនទី',
      mapNote: 'ចុចលើផែនទី ឬ អូសសញ្ញាសម្គាល់ ដើម្បីជ្រើសរើសរយៈទទឹង និង រយៈបណ្តោយ។',

      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      update: 'កែប្រែ',
      ok: 'យល់ព្រម',

      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',

      loadFailed: 'ផ្ទុកបរាជ័យ',
      loadProvinceFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យខេត្តបានទេ',
      loadDistrictFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យស្រុក/ក្រុងបានទេ',
      loadCommuneFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យឃុំ/សង្កាត់បានទេ',

      validationError: 'កំហុសទិន្នន័យ',
      fillRequired: 'សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់',
      validationMessage: 'ទិន្នន័យមិនត្រឹមត្រូវ',

      success: 'ជោគជ័យ',
      createdSuccess: 'បង្កើតបានជោគជ័យ!',
      updatedSuccess: 'កែប្រែបានជោគជ័យ!',

      createFailed: 'បង្កើតបរាជ័យ',
      createFailedMessage: 'មិនអាចបង្កើតឃុំ/សង្កាត់បានទេ',

      updateFailed: 'កែប្រែបរាជ័យ',
      updateFailedMessage: 'មិនអាចកែប្រែឃុំ/សង្កាត់បានទេ',

      deletedTitle: 'បានលុប',
      deletedSuccess: 'លុបបានជោគជ័យ!',

      deleteFailed: 'លុបបរាជ័យ',
      deleteFailedMessage: 'មិនអាចលុបទិន្នន័យឃុំ/សង្កាត់បានទេ',

      mapError: 'កំហុសផែនទី',
      mapErrorMessage: 'មិនអាចផ្ទុក Google Maps បានទេ',

      geolocationError: 'កំហុសទីតាំង',
      geolocationNotSupported: 'កម្មវិធីរុករកនេះមិនគាំទ្រការកំណត់ទីតាំងទេ។',

      locationError: 'កំហុសទីតាំង',
      unableToGetLocation: 'មិនអាចយកទីតាំងបច្ចុប្បន្នបានទេ។',
      permissionDenied: 'បានបដិសេធសិទ្ធិ។ សូមអនុញ្ញាតឱ្យប្រើទីតាំង។',
      locationUnavailable: 'មិនមានទីតាំង។',
      locationTimeout: 'ការស្នើសុំទីតាំងអស់ពេល។',

      codeError: 'កំហុសកូដ',
      codeErrorMessage: 'មិនអាចបង្កើតកូដឃុំ/សង្កាត់បានទេ',

      loading: 'សូមមេត្តារង់ចាំ ...!',
    },
    od: {
      title: 'ទម្រង់បញ្ចូលទិន្នន័យស្រុកប្រតិបត្តិ',
      createButton: 'បង្កើត OD',

      tableId: 'ល.រ',
      province: 'ខេត្ត',
      district: 'ស្រុក/ក្រុង',
      commune: 'ឃុំ/សង្កាត់',
      odNameEn: 'ឈ្មោះ OD (អង់គ្លេស)',
      odNameKh: 'ឈ្មោះ OD (ខ្មែរ)',
      odCode: 'កូដ OD',
      directorName: 'ឈ្មោះប្រធាន',
      phone: 'លេខទូរស័ព្ទ',
      latitude: 'រយៈទទឹង',
      longitude: 'រយៈបណ្តោយ',
      image: 'រូបភាព',
      action: 'សកម្មភាព',
      edit: 'កែប្រែ',
      delete: 'លុប',
      noData: 'មិនមានទិន្នន័យស្រុកប្រតិបត្តិ',

      createTitle: 'ទម្រង់បញ្ចូលទិន្នន័យស្រុកប្រតិបត្តិ',
      editTitle: 'កែប្រែ OD',
      createSubtitle: 'សូមបំពេញព័ត៌មានស្រុកប្រតិបត្តិ',
      editSubtitle: 'សូមកែប្រែព័ត៌មានស្រុកប្រតិបត្តិដែលបានជ្រើសរើស',

      sectionInfo: 'ព័ត៌មានស្រុកប្រតិបត្តិ',
      sectionMap: 'ទីតាំងលើផែនទី',

      selectProvince: 'ជ្រើសរើសខេត្ត',
      selectProvinceOption: '-- ជ្រើសរើសខេត្ត --',
      selectDistrict: 'ជ្រើសរើសស្រុក/ក្រុង',
      selectDistrictOption: '-- ជ្រើសរើសស្រុក/ក្រុង --',
      selectCommune: 'ជ្រើសរើសឃុំ/សង្កាត់',
      selectCommuneOption: '-- ជ្រើសរើសឃុំ/សង្កាត់ --',

      odNameEnLabel: 'ឈ្មោះការិយាល័យស្រុកប្រតិបត្តិ ជាអង់គ្លេស',
      odNameKhLabel: 'ឈ្មោះការិយាល័យស្រុកប្រតិបត្តិ ជាខ្មែរ',
      odCodeLabel: 'កូដ OD',
      odCodePlaceholder: 'កូដ OD បង្កើតស្វ័យប្រវត្តិ',

      directorNameLabel: 'ឈ្មោះប្រធាន',
      directorNamePlaceholder: 'បញ្ចូលឈ្មោះប្រធាន',

      phoneLabel: 'លេខទូរស័ព្ទ',
      phonePlaceholder: 'បញ្ចូលលេខទូរស័ព្ទ',

      imageLabel: 'រូបភាព',
      previewLabel: 'មើលជាមុន',
      imageAlt: 'រូបភាព OD',
      previewAlt: 'មើលជាមុន',
      removeImage: 'លុបរូបភាព',

      latitudeLabel: 'រយៈទទឹង',
      longitudeLabel: 'រយៈបណ្តោយ',

      getCurrentLocation: 'យកទីតាំងបច្ចុប្បន្ន',
      mapNote: 'ចុចលើផែនទី ឬ អូសសញ្ញាសម្គាល់ ដើម្បីជ្រើសរើសរយៈទទឹង និង រយៈបណ្តោយ។',

      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      update: 'កែប្រែ',
      ok: 'យល់ព្រម',

      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',

      loadFailed: 'ផ្ទុកបរាជ័យ',
      loadProvinceFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យខេត្តបានទេ',
      loadDistrictFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យស្រុក/ក្រុងបានទេ',
      loadCommuneFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យឃុំ/សង្កាត់បានទេ',
      loadODFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យ OD បានទេ',

      validationError: 'កំហុសទិន្នន័យ',
      fillRequired: 'សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់',
      validationMessage: 'ទិន្នន័យមិនត្រឹមត្រូវ',

      success: 'ជោគជ័យ',
      createdSuccess: 'បង្កើតបានជោគជ័យ!',
      updatedSuccess: 'កែប្រែបានជោគជ័យ!',

      createFailed: 'បង្កើតបរាជ័យ',
      createFailedMessage: 'មិនអាចបង្កើត OD បានទេ',

      updateFailed: 'កែប្រែបរាជ័យ',
      updateFailedMessage: 'មិនអាចកែប្រែ OD បានទេ',

      deletedTitle: 'បានលុប',
      deletedSuccess: 'លុបបានជោគជ័យ!',

      deleteFailed: 'លុបបរាជ័យ',
      deleteFailedMessage: 'មិនអាចលុបទិន្នន័យ OD បានទេ',

      mapError: 'កំហុសផែនទី',
      mapErrorMessage: 'មិនអាចផ្ទុក Google Maps បានទេ',

      geolocationError: 'កំហុសទីតាំង',
      geolocationNotSupported: 'កម្មវិធីរុករកនេះមិនគាំទ្រការកំណត់ទីតាំងទេ។',

      locationError: 'កំហុសទីតាំង',
      unableToGetLocation: 'មិនអាចយកទីតាំងបច្ចុប្បន្នបានទេ។',
      permissionDenied: 'បានបដិសេធសិទ្ធិ។ សូមអនុញ្ញាតឱ្យប្រើទីតាំង។',
      locationUnavailable: 'មិនមានទីតាំង។',
      locationTimeout: 'ការស្នើសុំទីតាំងអស់ពេល។',

      loading: 'សូមមេត្តារង់ចាំ ...!',
    },
    hc: {
      title: 'ទម្រង់បញ្ចូលទិន្នន័យមណ្ឌលសុខភាព',
      createButton: 'បង្កើតមណ្ឌលសុខភាព',

      tableId: 'ល.រ',
      province: 'ខេត្ត',
      district: 'ស្រុក/ក្រុង',
      commune: 'ឃុំ/សង្កាត់',
      od: 'OD',
      hcNameEn: 'ឈ្មោះមូលដ្ឋានសុខាភិបាល (អង់គ្លេស)',
      hcNameKh: 'ឈ្មោះមូលដ្ឋានសុខាភិបាល (ខ្មែរ)',
      hcCode: 'កូដ HC',
      directorName: 'ឈ្មោះប្រធាន',
      phone: 'លេខទូរស័ព្ទ',
      latitude: 'រយៈទទឹង',
      longitude: 'រយៈបណ្តោយ',
      image: 'រូបភាព',
      action: 'សកម្មភាព',
      edit: 'កែប្រែ',
      delete: 'លុប',
      noData: 'មិនមានទិន្នន័យមណ្ឌលសុខភាព',

      createTitle: 'ទម្រង់បញ្ចូលទិន្នន័យមណ្ឌលសុខភាព',
      editTitle: 'កែប្រែមណ្ឌលសុខភាព',
      createSubtitle: 'សូមបំពេញព័ត៌មានមណ្ឌលសុខភាព',
      editSubtitle: 'សូមកែប្រែព័ត៌មានមណ្ឌលសុខភាពដែលបានជ្រើសរើស',

      sectionInfo: 'ព័ត៌មានមណ្ឌលសុខភាព',
      sectionMap: 'ទីតាំងលើផែនទី',

      selectProvince: 'ជ្រើសរើសខេត្ត',
      selectProvinceOption: '-- ជ្រើសរើសខេត្ត --',
      selectDistrict: 'ជ្រើសរើសស្រុក/ក្រុង',
      selectDistrictOption: '-- ជ្រើសរើសស្រុក/ក្រុង --',
      selectCommune: 'ជ្រើសរើសឃុំ/សង្កាត់',
      selectCommuneOption: '-- ជ្រើសរើសឃុំ/សង្កាត់ --',
      selectOD: 'ជ្រើសរើសការិយាល័យស្រុកប្រតិបត្តិ',
      selectODOption: '-- ជ្រើសរើសការិយាល័យស្រុកប្រតិបត្តិ --',

      hcNameEnLabel: 'ឈ្មោះមូលដ្ឋានសុខាភិបាលជាអង់គ្លេស',
      hcNameKhLabel: 'ឈ្មោះមូលដ្ឋានសុខាភិបាលជាខ្មែរ',
      hcCodeLabel: 'កូដ HC',
      hcCodePlaceholder: 'កូដ HC បង្កើតស្វ័យប្រវត្តិ',

      directorNameLabel: 'ឈ្មោះប្រធាន',
      directorNamePlaceholder: 'បញ្ចូលឈ្មោះប្រធាន',

      phoneLabel: 'លេខទូរស័ព្ទ',
      phonePlaceholder: 'បញ្ចូលលេខទូរស័ព្ទ',

      imageLabel: 'រូបភាព',
      previewLabel: 'មើលជាមុន',
      imageAlt: 'រូបភាព HC',
      previewAlt: 'មើលជាមុន',
      removeImage: 'លុបរូបភាព',

      latitudeLabel: 'រយៈទទឹង',
      longitudeLabel: 'រយៈបណ្តោយ',

      getCurrentLocation: 'យកទីតាំងបច្ចុប្បន្ន',
      mapNote: 'ចុចលើផែនទី ឬ អូសសញ្ញាសម្គាល់ ដើម្បីជ្រើសរើសរយៈទទឹង និង រយៈបណ្តោយ។',

      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      update: 'កែប្រែ',
      ok: 'យល់ព្រម',

      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',

      loadFailed: 'ផ្ទុកបរាជ័យ',
      loadProvinceFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យខេត្តបានទេ',
      loadDistrictFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យស្រុក/ក្រុងបានទេ',
      loadCommuneFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យឃុំ/សង្កាត់បានទេ',
      loadODFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យ OD បានទេ',
      loadHCFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យមណ្ឌលសុខភាពបានទេ',

      validationError: 'កំហុសទិន្នន័យ',
      fillRequired: 'សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់',
      validationMessage: 'ទិន្នន័យមិនត្រឹមត្រូវ',

      success: 'ជោគជ័យ',
      createdSuccess: 'បង្កើតបានជោគជ័យ!',
      updatedSuccess: 'កែប្រែបានជោគជ័យ!',

      createFailed: 'បង្កើតបរាជ័យ',
      createFailedMessage: 'មិនអាចបង្កើតមណ្ឌលសុខភាពបានទេ',

      updateFailed: 'កែប្រែបរាជ័យ',
      updateFailedMessage: 'មិនអាចកែប្រែមណ្ឌលសុខភាពបានទេ',

      deletedTitle: 'បានលុប',
      deletedSuccess: 'លុបបានជោគជ័យ!',

      deleteFailed: 'លុបបរាជ័យ',
      deleteFailedMessage: 'មិនអាចលុបទិន្នន័យមណ្ឌលសុខភាពបានទេ',

      mapError: 'កំហុសផែនទី',
      mapErrorMessage: 'មិនអាចផ្ទុក Google Maps បានទេ',

      geolocationError: 'កំហុសទីតាំង',
      geolocationNotSupported: 'កម្មវិធីរុករកនេះមិនគាំទ្រការកំណត់ទីតាំងទេ។',

      locationError: 'កំហុសទីតាំង',
      unableToGetLocation: 'មិនអាចយកទីតាំងបច្ចុប្បន្នបានទេ។',
      permissionDenied: 'បានបដិសេធសិទ្ធិ។ សូមអនុញ្ញាតឱ្យប្រើទីតាំង។',
      locationUnavailable: 'មិនមានទីតាំង។',
      locationTimeout: 'ការស្នើសុំទីតាំងអស់ពេល។',

      codeError: 'កំហុសកូដ',
      codeErrorMessage: 'មិនអាចបង្កើតកូដ HC បានទេ',

      loading: 'សូមមេត្តារង់ចាំ ...!',
    },
    village: {
      title: 'ទម្រង់បញ្ចូលទិន្នន័យភូមិ',
      createButton: 'បង្កើតភូមិ',

      tableId: 'ល.រ',
      province: 'ខេត្ត',
      district: 'ស្រុក/ក្រុង',
      commune: 'ឃុំ/សង្កាត់',
      od: 'OD',
      hc: 'HC',
      villageNameEn: 'ឈ្មោះភូមិ (អង់គ្លេស)',
      villageNameKh: 'ឈ្មោះភូមិ (ខ្មែរ)',
      villageCode: 'កូដភូមិ',
      latitude: 'រយៈទទឹង',
      longitude: 'រយៈបណ្តោយ',
      action: 'សកម្មភាព',
      edit: 'កែប្រែ',
      delete: 'លុប',
      noData: 'មិនមានទិន្នន័យភូមិ',

      createTitle: 'ទម្រង់បញ្ចូលទិន្នន័យភូមិ',
      editTitle: 'កែប្រែភូមិ',
      createSubtitle: 'សូមបំពេញព័ត៌មានភូមិ',
      editSubtitle: 'សូមកែប្រែព័ត៌មានភូមិដែលបានជ្រើសរើស',

      sectionInfo: 'ព័ត៌មានភូមិ',
      sectionMap: 'ទីតាំងលើផែនទី',

      selectProvince: 'ជ្រើសរើសខេត្ត',
      selectProvinceOption: '-- ជ្រើសរើសខេត្ត --',
      selectDistrict: 'ជ្រើសរើសស្រុក/ក្រុង',
      selectDistrictOption: '-- ជ្រើសរើសស្រុក/ក្រុង --',
      selectCommune: 'ជ្រើសរើសឃុំ/សង្កាត់',
      selectCommuneOption: '-- ជ្រើសរើសឃុំ/សង្កាត់ --',
      selectOD: 'ជ្រើសរើសការិយាល័យស្រុកប្រតិបត្តិ',
      selectODOption: '-- ជ្រើសរើសការិយាល័យស្រុកប្រតិបត្តិ --',
      selectHC: 'ជ្រើសរើសមូលដ្ឋានសុខាភិបាល',
      selectHCOption: '-- ជ្រើសរើសមូលដ្ឋានសុខាភិបាល --',

      villageNameEnLabel: 'ឈ្មោះភូមិជាអង់គ្លេស',
      villageNameKhLabel: 'ឈ្មោះភូមិជាខ្មែរ',
      villageCodeLabel: 'កូដភូមិ',

      villageNameEnPlaceholder: 'បញ្ចូលឈ្មោះភូមិជាអង់គ្លេស',
      villageNameKhPlaceholder: 'បញ្ចូលឈ្មោះភូមិជាខ្មែរ',

      latitudeLabel: 'រយៈទទឹង',
      longitudeLabel: 'រយៈបណ្តោយ',

      getCurrentLocation: 'យកទីតាំងបច្ចុប្បន្ន',
      mapNote: 'ចុចលើផែនទី ឬ អូសសញ្ញាសម្គាល់ ដើម្បីជ្រើសរើសរយៈទទឹង និង រយៈបណ្តោយ។',

      cancel: 'បោះបង់',
      save: 'រក្សាទុក',
      update: 'កែប្រែ',
      ok: 'យល់ព្រម',

      confirmDeleteTitle: 'បញ្ជាក់ការលុប',
      confirmDeleteMessage: 'ទិន្នន័យនេះនឹងត្រូវលុប។ តើអ្នកប្រាកដទេ?',
      confirmDeleteButton: 'បាទ/ចាស លុប',

      loadFailed: 'ផ្ទុកបរាជ័យ',
      loadProvinceFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យខេត្តបានទេ',
      loadDistrictFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យស្រុក/ក្រុងបានទេ',
      loadCommuneFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យឃុំ/សង្កាត់បានទេ',
      loadODFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យ OD បានទេ',
      loadHCFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យមណ្ឌលសុខភាពបានទេ',
      loadVillageFailedMessage: 'មិនអាចផ្ទុកទិន្នន័យភូមិបានទេ',

      validationError: 'កំហុសទិន្នន័យ',
      fillRequired: 'សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់',
      validationMessage: 'ទិន្នន័យមិនត្រឹមត្រូវ',

      success: 'ជោគជ័យ',
      createdSuccess: 'បង្កើតបានជោគជ័យ!',
      updatedSuccess: 'កែប្រែបានជោគជ័យ!',

      createFailed: 'បង្កើតបរាជ័យ',
      createFailedMessage: 'មិនអាចបង្កើតភូមិបានទេ',

      updateFailed: 'កែប្រែបរាជ័យ',
      updateFailedMessage: 'មិនអាចកែប្រែភូមិបានទេ',

      deletedTitle: 'បានលុប',
      deletedSuccess: 'លុបបានជោគជ័យ!',

      deleteFailed: 'លុបបរាជ័យ',
      deleteFailedMessage: 'មិនអាចលុបទិន្នន័យភូមិបានទេ',

      mapError: 'កំហុសផែនទី',
      mapErrorMessage: 'មិនអាចផ្ទុក Google Maps បានទេ',

      geolocationError: 'កំហុសទីតាំង',
      geolocationNotSupported: 'កម្មវិធីរុករកនេះមិនគាំទ្រការកំណត់ទីតាំងទេ។',

      locationError: 'កំហុសទីតាំង',
      unableToGetLocation: 'មិនអាចយកទីតាំងបច្ចុប្បន្នបានទេ។',
      permissionDenied: 'បានបដិសេធសិទ្ធិ។ សូមអនុញ្ញាតឱ្យប្រើទីតាំង។',
      locationUnavailable: 'មិនមានទីតាំង។',
      locationTimeout: 'ការស្នើសុំទីតាំងអស់ពេល។',

      codeError: 'កំហុសកូដ',
      codeErrorMessage: 'មិនអាចបង្កើតកូដភូមិបានទេ',

      loading: 'សូមមេត្តារង់ចាំ ...!',
    },
  },
}

const saved = localStorage.getItem('app_locale') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: saved,
  fallbackLocale: 'en',
  messages,
})