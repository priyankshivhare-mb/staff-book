export const getProfileColor = (score) => {
    let colorClass = 'red';

    if (score <= 100 && score >= 80) {
        colorClass = 'green';
    } else if (score <= 80 && score >= 50) {
        colorClass = 'yellow';
    }

    return colorClass;
};

export const getRangeBasedRandomVal = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
