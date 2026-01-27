const FEATURES_ICONS = {
    AC: 'ac',
    bathroom: 'bathroom',
    kitchen: 'kitchen',
    TV: 'tv',
    radio: 'radio',
    refrigerator: 'fridge',
    microwave: 'microwave',
    gas: 'gas',
    water: 'water',
    automatic: 'automatic',
    petrol: 'petrol',
    diesel: 'diesel',
    hybrid: 'hybrid',
};

export default function getFeatureIconName(feature) {
    return FEATURES_ICONS[feature] || feature;
}