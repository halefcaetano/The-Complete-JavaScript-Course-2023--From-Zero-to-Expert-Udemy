const language = 'english';


switch (language){
    case 'mandarim':
    case 'chinses':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    default:
        console.log('Great language too :D');
}