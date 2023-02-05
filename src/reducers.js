import { NOT_EKLE, NOT_SIL, BASLANGİC_DEGERİ, VERILERI_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri.notlar;
  }
}

export default function reducer(state = baslangicDegerleri, action) {
  switch (action.type) {
    case NOT_EKLE:
      localStorageStateYaz(s10chLocalStorageKey, [
        action.payload,
        ...state.notlar,
      ]);
      return { ...state, notlar: localStorageStateOku(s10chLocalStorageKey) };

    case NOT_SIL:
      localStorageStateYaz(
        s10chLocalStorageKey,
        state.notlar.filter((item) => item.id !== action.payload)
      );
      return { ...state, notlar: localStorageStateOku(s10chLocalStorageKey) };

    case BASLANGİC_DEGERİ:
      return {
        ...state,
        notlar: baslangicNotlariniGetir(s10chLocalStorageKey),
      };

    case VERILERI_SIL:
      localStorageStateYaz(s10chLocalStorageKey, []);
      return { ...state, notlar: localStorageStateOku(s10chLocalStorageKey) };

    default:
      return state;
  }
}
