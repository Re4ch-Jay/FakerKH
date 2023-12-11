
const cities = [
  {
    "provinceKh": "ខេត្តបាត់ដំបង",
    "provinceEn": "Battambang Province",
    "municipalityKh": "ក្រុងបាត់ដំបង",
    "municipalityEn": "Battambang Municipality",
    "latitude": 13.10271,
    "longitude": 103.19822
  },
  {
    "provinceKh": "ខេត្តកំពង់ចាម",
    "provinceEn": "Kampong Cham Province",
    "municipalityKh": "ក្រុងកំពង់ចាម",
    "municipalityEn": "Kampong Cham Municipality",
    "latitude": 11.99339,
    "longitude": 105.4635
  },
  {
    "provinceKh": "ខេត្តកំពង់ឆ្នាំង",
    "provinceEn": "Kampong Chhnang Province",
    "municipalityKh": "ក្រុងកំពង់ឆ្នាំង",
    "municipalityEn": "Kampong Chhnang Municipality",
    "latitude": 12.25,
    "longitude": 104.66667
  },
  {
    "provinceKh": "ខេត្តកំពង់ស្ពឺ",
    "provinceEn": "Kampong Speu Province",
    "municipalityKh": "ក្រុងច្បារមន",
    "municipalityEn": "Chbar Mon Municipality",
    "latitude": 11.45332,
    "longitude": 104.52085
  },
  {
    "provinceKh": "ខេត្តកំពង់ធំ",
    "provinceEn": "Kampong Thom Province",
    "municipalityKh": "ក្រុងស្ទឹងសែន",
    "municipalityEn": "Stueng Saen Municipality",
    "latitude": 12.71112,
    "longitude": 104.88873
  },
  {
    "provinceKh": "ខេត្តកំពត",
    "provinceEn": "Kampot Province",
    "municipalityKh": "ក្រុងកំពត",
    "municipalityEn": "Kampot Municipality",
    "latitude": 10.61041,
    "longitude": 104.18145
  },
  {
    "provinceKh": "ខេត្តកោះកុង",
    "provinceEn": "Koh Kong Province",
    "municipalityKh": "ក្រុងខេមរភូមិន្ទ",
    "municipalityEn": "Khemara Phoumin Municipality",
    "latitude": 11.61531,
    "longitude": 102.9838
  },
  {
    "provinceKh": "ខេត្តក្រចេះ",
    "provinceEn": "Kratie Province",
    "municipalityKh": "ក្រុងក្រចេះ",
    "municipalityEn": "Kracheh Municipality",
    "latitude": 12.48811,
    "longitude": 106.01879
  },
  {
    "provinceKh": "ខេត្តកែប",
    "provinceEn": "Kep Province",
    "municipalityKh": "ក្រុងកែប",
    "municipalityEn": "Kaeb Municipality",
    "latitude": 10.48291,
    "longitude": 104.31672
  },
  {
    "provinceKh": "ខេត្តមណ្ឌលគិរី",
    "provinceEn": "Mondul Kiri Province",
    "municipalityKh": "ក្រុងសែនមនោរម្យ",
    "municipalityEn": "Saen Monourom Municipality",
    "latitude": 13.48784,
    "longitude": 106.98158
  },
  {
    "provinceKh": "ខេត្តប៉ៃលិន",
    "provinceEn": "Pailin Province",
    "municipalityKh": "ក្រុងប៉ៃលិន",
    "municipalityEn": "Pailin Municipality",
    "latitude": 12.84895,
    "longitude": 102.60928
  },
  {
    "provinceKh": "ខេត្តបន្ទាយមានជ័យ",
    "provinceEn": "Banteay Meanchey Province",
    "municipalityKh": "ក្រុងសិរីសោភ័ណ",
    "municipalityEn": "Serei Saophoan Municipality",
    "latitude": 13.65611,
    "longitude": 102.5625
  },
  {
    "provinceKh": "រាជធានីភ្នំពេញ",
    "provinceEn": "Phnom Penh Capital",
    "municipalityKh": "រាជធានីភ្នំពេញ",
    "municipalityEn": "Phnom Penh Capital",
    "latitude": 11.56245,
    "longitude": 104.91601
  },
  {
    "provinceKh": "ខេត្តព្រៃវែង",
    "provinceEn": "Prey Veng Province",
    "municipalityKh": "ក្រុងព្រៃវែង",
    "municipalityEn": "Prey Veng Municipality",
    "latitude": 11.48682,
    "longitude": 105.32533
  },
  {
    "provinceKh": "ខេត្តពោធិ៍សាត់",
    "provinceEn": "Pursat Province",
    "municipalityKh": "ក្រុងពោធិ៍សាត់",
    "municipalityEn": "Pursat Municipality",
    "latitude": 12.53878,
    "longitude": 103.9192
  },
  {
    "provinceKh": "ខេត្តឧត្ដរមានជ័យ",
    "provinceEn": "Oddar Meanchey Province",
    "municipalityKh": "ក្រុងសំរោង",
    "municipalityEn": "Samraong Municipality",
    "latitude": 14.18175,
    "longitude": 103.51761
  },
  {
    "provinceKh": "ខេត្តសៀមរាប",
    "provinceEn": "Siemreap Province",
    "municipalityKh": "ក្រុងសៀមរាប",
    "municipalityEn": "Siem Reap Municipality",
    "latitude": 13.36179,
    "longitude": 103.86056
  },
  {
    "provinceKh": "ខេត្តព្រះសីហនុ",
    "provinceEn": "Preah Sihanouk Province",
    "municipalityKh": "ក្រុងព្រះសីហនុ",
    "municipalityEn": "Preah Sihanouk Municipality",
    "latitude": 10.60932,
    "longitude": 103.52958
  },
  {
    "provinceKh": "ខេត្តស្ទឹងត្រែង",
    "provinceEn": "Stung Treng Province",
    "municipalityKh": "ក្រុងស្ទឹងត្រែង",
    "municipalityEn": "Stueng Traeng Municipality",
    "latitude": 13.52586,
    "longitude": 105.9683
  },
  {
    "provinceKh": "ខេត្តស្វាយរៀង",
    "provinceEn": "Svay Rieng Province",
    "municipalityKh": "ក្រុងស្វាយរៀង",
    "municipalityEn": "Svay Rieng Municipality",
    "latitude": 11.08785,
    "longitude": 105.79935
  },
  {
    "provinceKh": "ខេត្តកណ្ដាល",
    "provinceEn": "Kandal Province",
    "municipalityKh": "ក្រុងតាខ្មៅ",
    "municipalityEn": "Ta Khmau Municipality",
    "latitude": 11.48333,
    "longitude": 104.95
  },
  {
    "provinceKh": "ខេត្តតាកែវ",
    "provinceEn": "Takeo Province",
    "municipalityKh": "ក្រុងដូនកែវ",
    "municipalityEn": "Doun Kaev Municipality",
    "latitude": 10.99081,
    "longitude": 104.78498
  },
  {
    "provinceKh": "ខេត្តព្រះវិហារ",
    "provinceEn": "Preah Vihear Province",
    "municipalityKh": "ក្រុងព្រះវិហារ",
    "municipalityEn": "Preah Vihear Municipality",
    "latitude": 13.80731,
    "longitude": 104.98046
  },
  {
    "provinceKh": "ខេត្តត្បូងឃ្មុំ",
    "provinceEn": "Tboung Khmum Province",
    "municipalityKh": "ក្រុងសួង",
    "municipalityEn": "Suong Municipality",
    "latitude": 11.8891,
    "longitude": 105.876
  }
]

module.exports = cities;