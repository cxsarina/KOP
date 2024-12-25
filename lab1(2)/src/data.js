import seedImage from './images/1.png';
import sproutImage from './images/2.png';
import leafImage from './images/3.png';
import budImage from './images/4.png';
import bloomImage from './images/5.png';

export const stages = [
    { id: 1, image: seedImage, title: 'Посадка насіння', description: 'Посадка насіння у вологий ґрунт.' },
    { id: 2, image: sproutImage, title: 'Паросток', description: 'Насіння проросло і з’явився перший паросток.' },
    { id: 3, image: leafImage, title: 'Формування листя', description: 'Квітка росте, з’являються перші листочки.' },
    { id: 4, image: budImage, title: 'Бутонізація', description: 'З’являється бутон, готовий до розквіту.' },
    { id: 5, image: bloomImage, title: 'Розквіт', description: 'Бутон розкривається, квітка повністю виросла.' },
];
