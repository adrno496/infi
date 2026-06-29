// Calculs de doses et de débits : leçons + générateur d'exercices infini avec correction pas-à-pas.

export const LESSONS = [
  {
    titre: "Dose à administrer (produit en croix)",
    formule: "Volume = (Dose prescrite ÷ Dose disponible) × Volume disponible",
    exemple: "Prescrit 500 mg ; flacon 1 g / 10 mL → (500 ÷ 1000) × 10 = 5 mL.",
  },
  {
    titre: "Débit en mL/h",
    formule: "Débit (mL/h) = Volume total (mL) ÷ Durée (h)",
    exemple: "500 mL en 4 h → 125 mL/h.",
  },
  {
    titre: "Débit en gouttes/min",
    formule: "Débit (gttes/min) = (Volume × 20) ÷ (Durée en minutes)   [perfuseur 20 gttes = 1 mL]",
    exemple: "500 mL en 2 h → (500 × 20) ÷ 120 ≈ 83 gttes/min.",
  },
  {
    titre: "Dilution (C1·V1 = C2·V2)",
    formule: "V1 = (C2 × V2) ÷ C1",
    exemple: "Obtenir 100 mL à 2 % depuis une solution à 10 % : V1 = (2 × 100) ÷ 10 = 20 mL + 80 mL de solvant.",
  },
  {
    titre: "Dose selon le poids",
    formule: "Dose = Posologie (mg/kg) × Poids (kg)",
    exemple: "Paracétamol 15 mg/kg pour 20 kg → 300 mg.",
  },
];

function ri(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function round(x, d = 2) { const p = Math.pow(10, d); return Math.round(x * p) / p; }

const GENERATORS = {
  dose() {
    const presc = ri(2, 18) * 50;          // mg
    const dispoG = [500, 1000, 2000][ri(0, 2)];
    const vol = [5, 10, 20][ri(0, 2)];
    const rep = round((presc / dispoG) * vol, 2);
    return {
      type: "dose",
      enonce: `Prescription : <strong>${presc} mg</strong>. Vous disposez d'un flacon de <strong>${dispoG} mg / ${vol} mL</strong>. Quel volume prélever ?`,
      reponse: rep, unite: "mL", tolerance: 0.05,
      etapes: [
        `Formule : Volume = (Dose prescrite ÷ Dose disponible) × Volume disponible.`,
        `= (${presc} ÷ ${dispoG}) × ${vol}`,
        `= ${round(presc / dispoG, 4)} × ${vol} = <strong>${rep} mL</strong>.`,
      ],
    };
  },
  debitMlH() {
    const vol = [250, 500, 1000][ri(0, 2)];
    const h = ri(2, 12);
    const rep = round(vol / h, 1);
    return {
      type: "debit-mlh",
      enonce: `Perfuser <strong>${vol} mL</strong> en <strong>${h} heures</strong>. Quel débit en mL/h régler ?`,
      reponse: rep, unite: "mL/h", tolerance: 0.5,
      etapes: [`Débit = Volume ÷ Durée = ${vol} ÷ ${h} = <strong>${rep} mL/h</strong>.`],
    };
  },
  debitGouttes() {
    const vol = [250, 500, 1000][ri(0, 2)];
    const h = ri(1, 8);
    const min = h * 60;
    const rep = Math.round((vol * 20) / min);
    return {
      type: "debit-gttes",
      enonce: `Perfuser <strong>${vol} mL</strong> en <strong>${h} h</strong> avec un perfuseur à 20 gouttes/mL. Quel débit en gouttes/min ?`,
      reponse: rep, unite: "gttes/min", tolerance: 1,
      etapes: [
        `Durée en minutes = ${h} × 60 = ${min} min.`,
        `Débit = (Volume × 20) ÷ minutes = (${vol} × 20) ÷ ${min}`,
        `= ${vol * 20} ÷ ${min} ≈ <strong>${rep} gouttes/min</strong>.`,
      ],
    };
  },
  poids() {
    const dose = [10, 15, 20, 7.5][ri(0, 3)];
    const poids = ri(8, 80);
    const rep = round(dose * poids, 1);
    return {
      type: "poids",
      enonce: `Posologie : <strong>${dose} mg/kg</strong>. Le patient pèse <strong>${poids} kg</strong>. Quelle dose administrer ?`,
      reponse: rep, unite: "mg", tolerance: 0.5,
      etapes: [`Dose = ${dose} mg/kg × ${poids} kg = <strong>${rep} mg</strong>.`],
    };
  },
  dilution() {
    const c2 = [1, 2, 5][ri(0, 2)];
    const v2 = [100, 250, 500][ri(0, 2)];
    const c1 = [10, 20, 50][ri(0, 2)];
    const v1 = round((c2 * v2) / c1, 1);
    return {
      type: "dilution",
      enonce: `Préparer <strong>${v2} mL</strong> de solution à <strong>${c2} %</strong> à partir d'une solution mère à <strong>${c1} %</strong>. Quel volume de solution mère prélever ?`,
      reponse: v1, unite: "mL", tolerance: 0.5,
      etapes: [
        `Formule : V1 = (C2 × V2) ÷ C1.`,
        `= (${c2} × ${v2}) ÷ ${c1} = ${c2 * v2} ÷ ${c1} = <strong>${v1} mL</strong>`,
        `(compléter avec ${round(v2 - v1, 1)} mL de solvant).`,
      ],
    };
  },
};

export const TYPES = [
  { id: "dose", label: "Dose (flacon)" },
  { id: "debitMlH", label: "Débit mL/h" },
  { id: "debitGouttes", label: "Débit gouttes/min" },
  { id: "poids", label: "Dose / poids" },
  { id: "dilution", label: "Dilution" },
];

export function generate(type) {
  const keys = Object.keys(GENERATORS);
  const k = GENERATORS[type] ? type : keys[Math.floor(Math.random() * keys.length)];
  return GENERATORS[k]();
}

export function checkAnswer(ex, value) {
  const v = parseFloat(String(value).replace(",", "."));
  if (Number.isNaN(v)) return false;
  return Math.abs(v - ex.reponse) <= (ex.tolerance || 0.01);
}
