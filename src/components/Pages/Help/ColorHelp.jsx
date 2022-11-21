import React from 'react'

const ColorHelp = () => {
  return (
    <>
    <h1 className='text-2xl text-purple-400 text-center'>Колірні моделі</h1>
    <h2 className='text-2xl text-purple-400 text-center'>RGB</h2>
    <p>
    Адитивна  модель  кольору  найпростіша  для  розуміння.  Вона  є  досить  штучним  прийомом,  оскільки  продиктована  технологією  виготовлення  електронно-променевих  трубок.  Це апаратно-орієнтована модель, в якій кольори описуються за допомогою складання трьох базових кольорів – червоного, зеленого, синього – в різних пропорціях. Тому модель RGB називають адитивною (від англ. «add» складати, додавати). Кольори також називають колірними каналами моделі RGB.
    </p>
    <img src={require('./img/image002.gif')} alt="fractal" width={500} height={500} className='m-auto mt-2'/>

    <h2 className='text-2xl text-purple-400 text-center'>CMY (CMYK)</h2>
    <p>
    Субтрактивна модель використовується для підготовки не екранних, а  друкованих  зображень,  тобто  для  пристроїв,  які  реалізують  принцип поглинання (віднімання) кольорів. Друковані зображення відрізняються від екранних зображень тим, що їх бачать не у світлі, що проходить, а у відбитому світлі, оскільки аркуш паперу не випромінює світло.
    Базовими кольорами моделі CMY є кольори, які виходять у результаті віднімання основних кольорів RGB від білого. Звідси назва моделі субтрактивна (від англ. «to subtract» – віднімати). Базові кольори моделі CMY: C (CYAN) – блакитний = білий - червоний = зелений + синій; M (MAGENTA) – пурпурний = білий - зелений = червоний + синій; Y (YELLOW) – жовтий = білий - синій = червоний + зелений.
    </p>
    <img src={require('./img/image004.jpg')} alt="fractal" width={400} height={400} className='m-auto mt-2'/>

    <h2 className='text-2xl text-purple-400 text-center'>НSB</h2>
    <p > 
    Перевага НSВ перед іншими моделями полягає в тому, що вона більше відповідає природі кольору і добре узгоджується з моделлю сприйняття кольорів людиною. Тон є еквівалентом довжини хвилі світла, насиченість – інтенсивності хвилі, а яскравість – загальної кількості світла. Модель HSB відповідає поняттю кольору, яке використовують професійні художники. У них зазвичай є декілька основних фарб, а всі інші виходять додаванням до них білої і чорної. Таким чином, потрібні кольори – це деяка модифікація основних фарб: освітлених або затемнених. Хоча художники і змішують фарби, але це вже виходить за рамки моделі HSB.

Тон – це основний колір, який можна виділити в кольорі (довжина хвилі, яка переважає при випромінюванні).

Насиченість кольору характеризує його «чистоту»: чим вона більша, тим колір «чистіший» (тобто ближче до тонової хвилі). Нульова насиченість відповідає сірому кольору, а максимальна насиченість – найбільш яскравому варіанту даного кольору. Можна вважати, що зменшення насиченості відповідає додаванню білої фарби. У білому кольорі насиченість дорівнює 0, оскільки неможливо виділити його колірний тон.

Під яскравістю розуміється ступінь освітленості. При нульовій яскравості колір стає чорним. Максимальна яскравість при максимальній насиченості дають найбільш виразний варіант даного кольору. Можна вважати, що яскравість показує величину чорного відтінку доданого до кольору. Яскравість чорного кольору – 0, а білого – 1.
    </p>
    
    <h2 className='text-2xl text-purple-400 text-center'>НSV</h2>
    <p>
    Модель HSV створена Елві Смітом к 1978 році. Її зручно представляти у вигляді світлової шестигранної піраміди. При цьому по вертикальній осі відкладається значення V, а відстань від осі до бічної грані в горизонтальному перетині відповідає параметру S (за діапазон зміни цих величин приймається інтервал від нуля до одиниці) (рис. 7). Шестикутник, що лежить в основі піраміди, є проекцією колірного куба в напрямку його головної діагоналі. Тон кольору H задається кутом, відкладеним навколо вертикальної осі, починаючи від червоного. Точки на самій окружності відповідають чистим (максимально насиченим) кольорам. Точка в центрі відповідає нейтральному кольору мінімальної насиченості (білий, сірий, чорний – це залежить від яскравості). Тобто можна сказати, що кут нахилу вектора визначає відтінок, довжина вектора – насиченість кольору. Величина S змінюється від нуля на осі конуса, до одиниці на його гранях. Значенню V=0 відповідає вершина піраміди (чорний колір), значенню V=1 – основа піраміди; кольори при цьому найбільш інтенсивні. Точка з координатами V=1, S=0 – центр основи піраміди (відповідає білому кольору). Проміжні значення координати V при S=0 (тобто на осі піраміди) відповідають сірим кольорами, якщо S=0, то значення відтінку H вважається невизначеним, S=1, якщо точка лежить на бічній грані піраміди.
    </p>
    <img src={require('./img/image009.jpg')} alt="fractal" width={500} height={500} className='m-auto mt-2'/>

    <h2 className='text-2xl text-purple-400 text-center'>НSL</h2>
    <p>
    В основі колірної моделі HLS лежить система Освальда. Ця модель утворює простір у формі подвійного конуса. Колірний тон задається кутом повороту навколо вертикальної осі конусів. За початок відліку прийнятий синій колір. Кольори йдуть у спектральному порядку і замикаються пурпуровим. Отже, по вертикальній осі відкладається L (освітленість), а інші два параметри задаються як і в HSV/HSB. Ця модель утворює підпростір, що представляє собою подвійний конус, у якому чорний колір задається вершиною нижнього конуса і відповідає значенню L=0, білий колір максимальної інтенсивності задається вершиною верхнього конуса і відповідає значенню L=1. Максимально інтенсивні кольорові тони відповідають основі конуса з L=0,5, що не зовсім зручно. Тон кольору H, аналогічно системі HSV/HSB, задається кутом повороту. Насиченість S змінюється в межах від 0 до 1 і задається відстанню від вертикальної осі L до бічної поверхні конуса. Тобто максимально насичені кольори розташовуються при L=0,5 і S=1.
    </p>
    <img src={require('./img/HSL.jpg')} alt="fractal" width={500} height={500} className='m-auto mt-2'/>

    <h2 className='text-2xl text-purple-400 text-center'>XYZ</h2>
    <p>
    Протягом першої третини XX століття Міжнародна комісія з освітлення проводила дослідження фізіології людського зору, на основі яких у 1931 році була запропонована перцептивна колірна модель, що одержала назву XYZ.

  Колірний простір моделі кольору XYZ являє собою криволінійний конус з вершиною в початку колірних координат. У міру віддалення від вершини освітлення кольорів відповідних точок, що лежать усередині цього конуса, зростає. Наведена ​​на рис. 10 видима частина колірного трикутника в моделі кольору XYZ має форму сегмента неправильної параболи. На її криволінійній межі розташовуються спектрально чисті кольори, на прямолінійній хорді – кольори, одержані змішуванням червоного і пурпурного. При видаленні від межі фігури насиченість кольору зменшується і в центрі розташовується ахроматична точка.
    </p>
    <img src={require('./img/XYZ.jpg')} alt="fractal" width={500} height={500} className='m-auto mt-2'/>

    <h2 className='text-2xl text-purple-400 text-center'>LAB</h2>
    <p>
    Модель LAB базується на людському сприйнятті кольору. При однаковій інтенсивності око людини сприймає промені зеленого кольору найбільш яскравими, дещо менш яскравими – червоного кольору, і ще менш яскравими – синього. Яскравість при цьому є характеристикою сприйняття, а не характеристикою самого кольору. При розробці моделі LАВ переслідувалася мета математичного коректування нелінійності сприйняття кольору людиною.

Цій моделі віддають перевагу в основному професіонали, оскільки вона суміщає переваги як CMY, так і RGB, а саме забезпечує доступ до всіх кольорів, працюючи з досить великою швидкістю. А також вона відрізняється незвичайною побудовою, на відміну від інших колірних моделей. Побудова кольорів тут, так як і в RGB, базується на злитті трьох каналів.

Будь-який колір у колірній моделі LАВ обумовлюється параметрами L – яскравість (Lightness) і хроматичними складовими – двома декартовими координатами: а, (змінюється від зеленого до червоного, через сірий і b (змінюється від синього до яскраво жовтого через сірий) (рис. 9). L здійснює контроль за яскравістю кольорів, утворених а і b. Білий колір співставляється з максимальною інтенсивністю. L лежать в межах 0-100,  а і b в межах [-200;200]. Якщо a і b рівні 0, змінюючи L, отримуємо зображення, що містить градації сірого (grayscale).
    </p>
    <img src={require('./img/image012.jpg')} alt="fractal" width={500} height={500} className='m-auto mt-2'/>

    </>
    )
}

export default ColorHelp