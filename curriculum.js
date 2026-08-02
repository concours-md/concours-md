// ============================================================
// Shared curriculum data — single source of truth for
// dashboard.html, test.html and manage.html.
// Category KEYS are lowercase ('biology'); questions in the
// database store the capitalised form ('Biology').
// ============================================================

export const courses = {
      biology: [
        { fr: 'Cytologie', en: 'Cytology' },
        { fr: 'Histologie animale', en: 'Animal Histology' },
        { fr: 'Histologie végétale', en: 'Plant Histology' },
        { fr: 'Génétique', en: 'Genetics' },
        { fr: 'Anatomie', en: 'Anatomy' },
        { fr: 'Botanique', en: 'Botany' },
        { fr: 'Reproduction animale', en: 'Animal Reproduction' },
        { fr: 'Reproduction végétale', en: 'Plant Reproduction' },
        { fr: 'Embryologie', en: 'Embryology' },
        { fr: 'Géologie', en: 'Geology' },
        { fr: 'Écologie', en: 'Ecology' }
      ],
      chemistry: [
        { fr: 'Chimie générale', en: 'General Chemistry' },
        { fr: 'Chimie organique', en: 'Organic Chemistry' },
        { fr: 'Chimie de solution', en: 'Chemistry of Solution' }
      ],
      physics: [
        { fr: 'Physique 1', en: 'Physics 1' },
        { fr: 'Physique 2', en: 'Physics 2' }
      ],
      maths: [
        { fr: 'Analyse', en: 'Analysis' },
        { fr: 'Statistique', en: 'Statistics' },
        { fr: 'Algèbre', en: 'Algebra' }
      ]
    };

export const chapters = {
      biology: {
        'Cytology': [
          { en: 'Origin of Cell Biology', fr: 'Origine de la biologie cellulaire' },
          { en: 'Molecular Components of Cells', fr: 'Composants moléculaires des cellules' },
          { en: 'Eukaryotes, Prokaryotes and Viruses', fr: 'Eucaryotes, procaryotes et virus' },
          { en: 'Plasma Membrane and Other Cell Membranes', fr: 'Membrane plasmique et autres membranes cellulaires' },
          { en: 'Ribosomes and Protein Synthesis', fr: 'Ribosomes et synthèse des protéines' },
          { en: 'Endoplasmic Reticulum', fr: 'Réticulum endoplasmique' },
          { en: 'Golgi Complex', fr: 'Appareil de Golgi' },
          { en: 'Lysosomes', fr: 'Lysosomes' },
          { en: 'Peroxisomes', fr: 'Peroxysomes' },
          { en: 'Mitochondria', fr: 'Mitochondries' },
          { en: 'Plastids', fr: 'Plastes' },
          { en: 'The Cytoskeleton', fr: 'Le cytosquelette' },
          { en: 'Organization of the Nucleus', fr: 'Organisation du noyau' },
          { en: 'The Cell Cycle', fr: 'Le cycle cellulaire' }
        ],
        'Animal Histology': [
          { en: 'Epithelial Tissues', fr: 'Les tissus épithéliaux' },
          { en: 'Non-Specialized Connective Tissue', fr: 'Le tissu conjonctif non spécialisé' },
          { en: 'Adipose Tissue', fr: 'Tissu adipeux' },
          { en: 'Cartilaginous Tissue', fr: 'Tissu cartilagineux' },
          { en: 'Bone Tissue', fr: 'Tissu osseux' },
          { en: 'Blood Tissue', fr: 'Tissu sanguin' },
          { en: 'Muscle Tissues', fr: 'Les tissus musculaires' },
          { en: 'Nervous Tissue', fr: 'Le tissu nerveux' }
        ],
        'Plant Histology': [
          { en: 'Introduction', fr: 'Introduction' },
          { en: 'Plant Tissues', fr: 'Les tissus végétaux' }
        ],
        'Genetics': [
          { en: 'Biochemical Bases of Heredity', fr: 'Bases biochimiques de l\'hérédité' },
          { en: 'Mitosis and Meiosis', fr: 'La mitose et la méiose' },
          { en: 'Genetic Mutations and Chromosomes', fr: 'Mutations génétiques et chromosomes' },
          { en: 'Mendelian Genetics', fr: 'Génétique mendélienne' },
          { en: 'Extension of Mendelian Genetics', fr: 'Prolongement de la génétique mendélienne' },
          { en: 'Genetics and Sexuality', fr: 'Génétique et sexualité' },
          { en: 'Linkage and Genetic Mapping', fr: 'Liaison et carte génétique' },
          { en: 'Human Genetics', fr: 'Génétique humaine' }
        ],
        'Anatomy': [
          { en: 'Organization of the Human Body', fr: 'Organisation du corps humain' },
          { en: 'The Skeletal System', fr: 'Le système squelettique' },
          { en: 'Central Nervous System: Brain & Spinal Cord', fr: 'Système nerveux central : Cerveau et moelle épinière' },
          { en: 'Special Senses: Eye & Ear', fr: 'Sens spéciaux : Œil et oreille' },
          { en: 'The Cardiovascular System: Heart', fr: 'Le système cardiovasculaire : Cœur' },
          { en: 'The Respiratory System', fr: 'Le système respiratoire' },
          { en: 'The Digestive System', fr: 'Le système digestif' }
        ],
        'Botany': [
          { en: 'The Organization of the Living World', fr: 'L\'organisation du monde vivant' },
          { en: 'Prokaryotes: Kingdoms of Eubacteria and Archaebacteria', fr: 'Procaryotes : Règnes des eubactéries et archéobactéries' },
          { en: 'Kingdom of Protista', fr: 'Règne des protistes' },
          { en: 'Kingdom of Fungi', fr: 'Règne des champignons' },
          { en: 'Plant Kingdom', fr: 'Règne végétal' },
          { en: 'Photosynthesis', fr: 'Photosynthèse' }
        ],
        'Ecology': [
          { en: 'General Introduction', fr: 'Introduction générale' },
          { en: 'Ecological Domains and Terminologies', fr: 'Domaines écologiques et terminologies' },
          { en: 'Ecological Factors (Abiotic, Biotic)', fr: 'Les facteurs écologiques (abiotiques, biotiques)' },
          { en: 'Terrestrial Biomes', fr: 'Les biomes terrestres' },
          { en: 'Aquatic Biomes', fr: 'Les biomes aquatiques' },
          { en: 'Food Chains and Ecological Pyramids', fr: 'Chaînes alimentaires et pyramides écologiques' },
          { en: 'Ecosystem Functioning and Biogeochemical Cycles', fr: 'Fonctionnement des écosystèmes et cycles biogéochimiques' }
        ],
        'Embryology': [
          { en: 'Introduction and Generalities', fr: 'Introduction et généralités' },
          { en: 'Different Types of Eggs', fr: 'Les différents types d\'œufs' },
          { en: 'Main Stages of Development', fr: 'Les étapes principales du développement' },
          { en: 'Development of an Insect', fr: 'Le développement d\'un insecte' },
          { en: 'Development of an Echinoderm', fr: 'Le développement d\'un échinoderme' },
          { en: 'Development of an Amphibian', fr: 'Le développement d\'un amphibien' },
          { en: 'Development of a Bird', fr: 'Le développement d\'un oiseau' },
          { en: 'Development of a Mammal', fr: 'Le développement d\'un mammifère' }
        ],
        'Animal Reproduction': [
          { en: 'Meiosis and Gametogenesis', fr: 'Méiose et gamétogenèse' },
          { en: 'Chemical Messengers of Reproduction', fr: 'Les messagers chimiques de la reproduction' },
          { en: 'Gonadogenesis', fr: 'La gonadogenèse' },
          { en: 'Male Reproductive System', fr: 'L\'appareil reproducteur masculin' },
          { en: 'Female Reproductive System', fr: 'L\'appareil reproducteur féminin' },
          { en: 'Fertilization', fr: 'La fécondation' }
        ],
        'Plant Reproduction': [
          { en: 'Introduction - General Principles', fr: 'Introduction - Principes généraux' },
          { en: 'Reproduction of Prokaryotes', fr: 'Reproduction des procaryotes' },
          { en: 'Sexual Reproduction - General Concepts', fr: 'Reproduction sexuelle - Concepts généraux' },
          { en: 'Reproduction of Algae', fr: 'Reproduction des algues' },
          { en: 'Reproduction of Fungi', fr: 'Reproduction des champignons' },
          { en: 'Reproduction of Bryophytes', fr: 'Reproduction des bryophytes' },
          { en: 'Reproduction of Pteridophytes', fr: 'Reproduction des ptéridophytes' },
          { en: 'Reproduction of Gymnosperms', fr: 'Reproduction des gymnospermes' },
          { en: 'Reproduction of Angiosperms', fr: 'Reproduction des angiospermes' },
          { en: 'Asexual Reproduction', fr: 'Reproduction asexuée' }
        ],
        'Geology': [
          { en: 'The Universe and the Solar System', fr: 'L\'univers et le système solaire' },
          { en: 'The Lithosphere', fr: 'La lithosphère' },
          { en: 'The Atmosphere and its Dynamics', fr: 'L\'atmosphère et sa dynamique' },
          { en: 'The Hydrosphere and its Dynamics', fr: 'L\'hydrosphère et sa dynamique' }
        ]
      },
      chemistry: {
        'General Chemistry': [
          { en: 'Atomic Structure', fr: 'Structure atomique' },
          { en: 'Atomic Electron Configurations and Chemical Periodicity', fr: 'Configurations électroniques atomiques et périodicité chimique' },
          { en: 'Bonding - General Concept', fr: 'Liaison - Concept général' },
          { en: 'Bonding Orbitals', fr: 'Orbitales de liaison' },
          { en: 'Thermochemistry', fr: 'Thermochimie' },
          { en: 'Entropy and Free Energy', fr: 'Entropie et énergie libre' },
          { en: 'Chemical Kinetics', fr: 'Cinétique chimique' }
        ],
        'Organic Chemistry': [
          { en: 'Introduction to Organic Chemistry', fr: 'Introduction à la chimie organique' },
          { en: 'Alkanes and Cycloalkanes', fr: 'Alcanes et cycloalcanes' },
          { en: 'Alkenes and Alkynes', fr: 'Alcènes et alcynes' },
          { en: 'Aromatic Compounds', fr: 'Composés aromatiques' },
          { en: 'Functional Groups', fr: 'Groupes fonctionnels' },
          { en: 'Stereochemistry', fr: 'Stéréochimie' }
        ],
        'Chemistry of Solution': [
          { en: 'Solutions and Solubility', fr: 'Solutions et solubilité' },
          { en: 'Acids and Bases', fr: 'Acides et bases' },
          { en: 'Chemical Equilibrium', fr: 'Équilibre chimique' },
          { en: 'Electrochemistry', fr: 'Électrochimie' }
        ]
      },
      physics: {
        'Physics 1': [
          { en: 'Kinematics', fr: 'Cinématique' },
          { en: 'Dynamics', fr: 'Dynamique' },
          { en: 'Work and Energy', fr: 'Travail et énergie' },
          { en: 'Hydrostatics', fr: 'Hydrostatique' },
          { en: 'Hydrodynamics', fr: 'Hydrodynamique' },
          { en: 'Momentum, Shock and Collision', fr: 'Quantité de mouvement, choc et collision' },
          { en: 'Rotational Dynamics', fr: 'Dynamique de rotation' }
        ],
        'Physics 2': [
          { en: 'Electrostatic Force', fr: 'Force électrostatique' },
          { en: 'Electrostatic Field', fr: 'Champ électrostatique' },
          { en: 'Electrostatic Potential', fr: 'Potentiel électrostatique' },
          { en: "Gauss's Theorem", fr: 'Théorème de Gauss' },
          { en: 'Capacitors', fr: 'Condensateurs' },
          { en: "Kirchhoff's Law", fr: 'Loi de Kirchhoff' },
          { en: 'Magnetic Forces', fr: 'Forces magnétiques' },
          { en: 'Sources of Magnetic Fields', fr: 'Sources de champs magnétiques' },
          { en: "Snell's Law", fr: 'Loi de Snell-Descartes' },
          { en: 'Reflection and Refraction', fr: 'Réflexion et réfraction' },
          { en: 'Diopters', fr: 'Dioptres' },
          { en: 'Thin Lenses', fr: 'Lentilles minces' },
          { en: 'Centered Systems', fr: 'Systèmes centrés' },
          { en: 'The Eye', fr: 'L\'œil' }
        ]
      },
      maths: {
        'Analysis': [
          { en: 'Derivability and Reciprocal Functions', fr: 'Dérivabilité et fonctions réciproques' },
          { en: 'Exponential and Hyperbolic Functions', fr: 'Fonctions exponentielles et hyperboliques' },
          { en: 'Taylor Series', fr: 'Développements limités' },
          { en: 'Simple Integrals', fr: 'Intégrales simples' },
          { en: 'Double Integrals', fr: 'Intégrales doubles' },
          { en: 'Differential Equations', fr: 'Équations différentielles' }
        ],
        'Statistics': [
          { en: 'Univariate Statistics', fr: 'Statistique univariée' },
          { en: 'Bivariate Statistics', fr: 'Statistique bivariée' },
          { en: 'Combinatorics and Probability', fr: 'Combinatoire et probabilité' }
        ],
        'Algebra': [
          { en: 'Matrices', fr: 'Matrices' },
          { en: 'Determinants', fr: 'Déterminants' },
          { en: 'Linear Systems', fr: 'Systèmes linéaires' },
          { en: 'Matrix Reduction', fr: 'Réduction de matrices' }
        ]
      }
    };

export const subjectNames = {
      biology: { en: 'Biology', fr: 'Biologie' },
      chemistry: { en: 'Chemistry', fr: 'Chimie' },
      physics: { en: 'Physics', fr: 'Physique' },
      maths: { en: 'Maths', fr: 'Maths' }
    };

// Query every casing variant, because the dashboard uses lowercase keys
// while imported questions are stored capitalised.
export function categoryVariants(category) {
  const raw = String(category || '').trim();
  if (!raw) return [];
  const lower = raw.toLowerCase();
  const title = lower.charAt(0).toUpperCase() + lower.slice(1);
  return [...new Set([raw, lower, title, raw.toUpperCase()])];
}

export function safeParse(str, fallback) {
  try { return JSON.parse(str); } catch { return fallback; }
}

// Match a stored {en, fr} pair against a name in either language.
export function matchesName(obj, name) {
  if (!obj || !name) return false;
  const t = String(name).trim().toLowerCase();
  return String(obj.en || '').trim().toLowerCase() === t
      || String(obj.fr || '').trim().toLowerCase() === t;
}

export function courseOf(q) { return safeParse(q.course, {}); }
export function topicOf(q) { return (safeParse(q.metadata, {}).topic) || {}; }

// Resolve the lowercase category key for any stored spelling.
export function categoryKey(value) {
  const v = String(value || '').trim().toLowerCase();
  return ['biology','chemistry','physics','maths'].includes(v) ? v : '';
}
