export const getProfileColor = (score) => {
    if (score <= 100 && score >= 80) {
        return 'green';
    } else if (score <= 80 && score >= 50) {
        return 'yellow';
    }
}
