import React from 'react'

export const FractalHelp = () => {
  return (
    <>
    <h1 className='text-2xl text-purple-400 text-center'>ФРАКТАЛЬНІ ЗОБРАЖЕННЯ</h1>
    <p >Поняття фрактал і фрактальна геометрія, що з’явилися в кінці 70-х, із середини 80-х міцно увійшли до ужитку математиків і програмістів. Слово фрактал утворено від латинського “fractus”, що в перекладі означає “той, що складається з фрагментів”. Воно було запропоноване Бенуа Мандельбротом у 1975 році для позначення нерегулярних, але самоподібних структур, якими він займався. Народження фрактальної геометрії прийнято пов’язувати з виходом у 1977 році книги Мандельброта “The Fractal Geometry of Nature”. У його роботах використані наукові результати інших учених, що працювали в період 1875–1925 років у тій же області (Пуанкаре, Фату, Жюліа, Кантор, Хаусдорф). Але тільки у наш час вдалося об’єднати їхні роботи в єдину систему.
        Роль фракталів в комп’ютерній графіці сьогодні велика. Вони приходять на допомогу, наприклад, коли потрібно за допомогою декількох коефіцієнтів задати лінії і поверхні дуже складної форми. З погляду комп’ютерної графіки, фрактальна геометрія незамінна під час генерації штучних хмар, гір, поверхні морів. Фактично знайдено спосіб легкого представлення складних  об’єктів, які схожі на природні.
        Однією з основних властивостей фракталів є самоподібність. У найпростішому випадку невелика частина фрактала містить інформацію про весь фрактал.
        Визначення фрактала, дане Мандельбротом, звучить так: “Фракталом називається структура, що складається з частин, які в якомусь сенсі подібні до цілого”.
    </p>
    <h2 className='text-2xl text-purple-400 text-center'>Геометричні</h2>
    <p> Фрактали цього класу найнаочніші. Цей тип фракталів утворюється шляхом простих геометричних побудов. Наприклад, у двомірному випадку їх отримують за допомогою деякої ламаної (або поверхні в тривимірному випадку), званої генератором. За один крок алгоритму кожен з відрізків (складових ламаної) замінюється на ламану-генератор, у відповідному масштабі. У результаті нескінченного повторення цієї процедури, виходить геометричний фрактал.</p>

    <h2 className='text-2xl text-purple-400 text-center'>Алгебраїчні</h2>
    <p > Це найбільша група фракталів. Отримують їх за допомогою нелінійних процесів в n-мірних просторах. Найбільше вивчені двомірні процеси. Інтерпретуючи нелінійний ітераційний процес, як дискретну динамічну систему, можна користуватися термінологією теорії цих систем: фазовий портрет, сталий процес, аттрактор і т.д.
    Відомо, що нелінійні динамічні системи володіють декількома стійкими станами. Той стан, в якому опинилася динамічна система після деякого числа ітерацій, залежить від її початкового стану. Тому кожен стійкий стан (або як говорять – аттрактор) володіє деякою областю початкових станів, з яких система обов’язково потрапить в дані кінцеві стани. Таким чином, фазовий простір системи розбивається на області тяжіння аттракторів. Якщо фазовим є двомірний простір, то забарвлюючи області тяжіння різними кольорами, можна отримати колірний фазовий портрет цієї системи (ітераційного процесу). Міняючи алгоритм вибору кольору, можна отримати складні фрактальні картини з химерними багатоколірними узорами. Несподіванкою для математиків стала можливість за допомогою примітивних алгоритмів породжувати дуже складні нетривіальні структури.</p>
    <img src={require('./img/fractal.png')} alt="fractal" width={500} height={500} className='m-auto mt-2'/>
    <h2 className='text-2xl text-purple-400 text-center'>Стохастичні</h2>
    <p>Ще одним відомим класом фракталів є стохастичні фрактали, які виходять в тому випадку, коли в ітераційному процесі випадковим чином міняти які-небудь його параметри. При цьому утворюються об’єкти дуже схожі на природні – несиметричні дерева, порізані берегові лінії і так далі Двовимірні стохастичні фрактали використовуються при моделюванні рельєфу місцевості і поверхні моря. У зв’язку з цим двовимірні  стохастичні  фрактали  дуже  часто  використовуються під час моделювання різних природних об’єктів: рельєфу  місцевості, поверхні моря тощо</p>
    </>
  )
}
