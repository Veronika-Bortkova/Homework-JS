
//--------------------------------5
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const element of coursesArray) {
    let divCourse = document.createElement("div");
    divCourse.classList.add("course");
    let ulModules = document.createElement("ul");
    let i = 0;
    for (const key in element) {
        let divInfoCourse = document.createElement("div");
        i++;
        divInfoCourse.classList.add("courseInfo");
        divInfoCourse.innerText = element[key];
        if (i>1) {// роблю для того, щоб не було в верхнему блоку запису такого виду "title -  JavaScript Complex", бо виглядає якось не полюдськи. А в інших блоках, щоб навпаки було - бо незрозуміло без цього, яка інфа в них лежить
            divInfoCourse.innerText = `${key} - ${element[key]}`;
        }
        divCourse.append(divInfoCourse);
        if (Array.isArray(element[key])){
            divInfoCourse.innerText = "Modules";
            divInfoCourse.append(ulModules);
        }
    }
         for (const ModulElement of element.modules) {
             let liNameModul = document.createElement("li");
             liNameModul.innerText = ModulElement;
             ulModules.append(liNameModul);
         }
    document.body.append(divCourse);
}
