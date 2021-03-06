// Важен порядок элементов
var number_of_disciplines = ['МатАн', 'Алгебра', 'Дискретка', 'БД', 'Икт', 'ТерВер', 'Сети'];
var number_sections_of_the_discipline = ['Аналитическая геометрия','Элементы высшей алгебры', 'Пределы', 'Производные функций', 'Функции и графики', 
										 'ФНП', 'Интегралы', 'Дифференциальные уравнения', 'Числовые ряды', 'Функциональные ряды', 'Кратные интегралы', 
										 'Элементы векторного анализа', 'Комплексный анализ', 'Теория вероятностей'];


var list_of_disciplines = [
  ['math', 'МатАн', 'Математический анализ'],
  ['algebra', 'Алгебра', 'Алгебра и геометрия'],
  ['discrete', 'Дискретка', 'Дискретная математика и математическая логика'],
  ['data-base', 'БД', 'Базы данных'],
  ['informatics', 'Икт', 'Информатика и программирование'],
  ['probability', 'ТерВер', 'Теория вероятностей и статистика'],
  ['network', 'Сети', 'Компьютерные сети']
]; 

var sections_of_the_discipline = {
  'МатАн': [
    ['Аналитическая геометрия', 'analytical_geometry'],
	['Элементы высшей алгебры', 'elements_of_higher_algebra'],
	['Пределы', 'limits'],
	['Производные функций', 'derived_functions'],
	['Функции и графики', 'functions_and_graphics'],
	['ФНП', 'functions_of_several_variables'],
	['Интегралы', 'integral'],
	['Дифференциальные уравнения', 'differential_equation'],
	['Числовые ряды', 'numerical_series'],
	['Функциональные ряды', 'functional_series'],
	['Кратные интегралы', 'multiple_integrals'],
	['Элементы векторного анализа', 'elements_of_vector_analysis'],
	['Комплексный анализ', 'complex_analysis'],
	['Теория вероятностей', 'probability_theory']
    // ['Пределы', 'https://yadi.sk/i/et_9P8UO3XeRdS'], 
    // ['Производные', 'https://yadi.sk/i/6J5YCc9_3XeRhm'],
    // ['Частные производные', 'https://yadi.sk/i/y8eKYK9O3XeR8d'],
    // ['Матрицы, определитель', 'https://yadi.sk/i/VNYz82K43XeRDB'],
    // ['Интегралы', 'https://yadi.sk/i/OGvVGQr73XeRZw'],
    // ['Ряды', 'https://yadi.sk/i/ojC-3hUH3XeRjr'],
    // ['Дифференциальные уравнения', 'https://yadi.sk/i/5JSImWCz3XeRM9']
],
  'Алгебра': [
    ["Системы линейных алгебраических уравнений. Метод Гаусса", ''], 
    ["Комплексные числа и операции с ними. Формула Муавра.", ''],
    ["Операции с матрицами. Обратная матрица.", ''],
    ["Определитель матрицы. Вычисление и свойства.", ''],
    ["Минор, алгебраическое дополнение, ранг", ''],
    ["Скалярное, векторное и смешанное произведения векторов в трехмерном пространстве.", ''],
    ["Многочлены от одной переменной. Деление столбиком. Алгоритм Евклида. Корни многочлена. Формулы Виета.", ''],
    ["Векторные пространства. Линейная зависимость / независимость. Базис и размерность",  ''],
    ["Геометрический смысл ранга матрицы.", ''],
    ["Параметрические и канонические уравнения прямой на плоскости, прямой и плоскости в трехмерном пространстве.",  ''],
    ["Евклидово векторное пространство. Скалярное произведение. Длина вектора. Угол между векторами.",  ''],
    ["Ортогонализация Грама-Шмидта. Матрица Грама и ее применение к вычислению объема и построению ортогональной проекции.",  ''],
    ["Линейное отображение и линейный оператор. Матрица линейного отображения.",  ''],
    ["Собственные значения и собственные вектора линейного оператора.",  ''],
    ["Жорданова нормальная форма матрицы.", ''],
    ["Приведение уравнения кривой/поверхности второго порядка к каноническому виду.", ''] 
],
  'Дискретка' : [
    ['Операции объединения и пересечения для множеств. Законы дистрибутивности для множеств. Отношение включения множеств.', ''],
    ['Отношение порядка (строгого) на множестве (частичного и линейного). Отношение эквивалентности и его свойства. Свойства бинарных отношений эквивалентности и порядка на множестве.', ''],
    ['Мощность множеств.', ''],
    ['Элементы комбинаторики: cочетания, перестановки и размещения с повторениями и без. Комбинаторное правило умножения и условия его выполнения.', ''],
    ['Обыкновенные графы. Степень вершины. Изоморфизм графов. Деревья и двудольные графы. Дополнительный граф и его определение. Маршруты в графе.', ''],
    ['Булевы функции. Двойственность булевых функций. Полнота системы булевых функций.', '']
],
  'БД' : [
    ["Организация баз данных. Модели данных. ER-модели.", ''],
    ["Операции реляционной алгебры.", ''],
    ["Нормализация реляционных отношений.", ''],
    ["Создание реляционной таблицы: первичные и внешние ключи, ограничения UNIQUE, NOT NULL и CHECK.", ''],
    ["Язык SQL. Использование функций агрегирования (AVG, SUM, COUNT, MAX, MIN и др.) и операции группировки (GROUP BY) в операторе SELECT.", ''],
    ["Операторы манипулирования данными INSERT, DELETE и UPDATE.", ''],
    ["Использование вложенных запросов.", '']
],
  'Икт' : [
    ["Понятие алгоритма и алгоритмической системы. Языки программирования.", ''],
    ["Основные структуры данных: стек, очередь, дерево.", ''],
    ["Основные типы алгоритмов, их сложность и анализ быстродействия. Рекурсивные алгоритмы.", ''],
    ["Основные алгоритмы поиска и сортировки.", ''],
    ["Алгоритмы на графах.", ''],
    ["Переборные алгоритмы. Алгоритмы «разделяй и властвуй». Динамическое программирование.", ''],
    ["Организация вычислительных систем. Понятие архитектуры и основные виды архитектуры ЭВМ.", ''],
    ["Основные этапы, методы, средства и стандарты разработки программного обеспечения. Системы программирования.", ''],
    ["Операционные системы и управление ресурсами в операционной системе.", '']
],
  'ТерВер' : [
    ['Определения вероятности. События, операции над ними.', ''],
    ['Аксиоматический подход к определению вероятности, свойства вероятностей', ''],
    ['Формула включений-исключений. Задача о почтальоне.', ''],
    ['Условная вероятность. Формула полной вероятности. Формула Байеса.', ''],
    ['Независимость событий. Независимость отрицания событий', ''],
    ['Случайные величины. Примеры дискретных случайных величин: индикатор события, геометрическое, биномиальное, гипергеометрическое и пуассоновское распределение.', ''],
    ['Математическое ожидание дискретной случайной величины, его свойства. Аддитивность математического ожидания.', ''],
    ['Математическое ожидание индикатора. Математическое ожидание величины с геометрическим, биномиальным, гипергеометрическим, пуассоновским законом распределения.', ''],
    ['Независимость случайных величин. Теорема об эквивалентности определений независимости. Независимость функций от независимых случайных величин.', ''],
    ['Дисперсия случайной величины. Среднеквадратичное отклонение. Свойства. Дисперсия индикатора. Дисперсия величины с геометрическим, пуассоновским законом распределения. Дисперсия суммы случайных величин. Дисперсия величины с биномиальным законом распределения.', ''],
    ['Математическое ожидание произведения случайных величин. Ковариация случайных величин. Свойства ковариации.', ''],
    ['Коэффициент корреляции случайных величин. Свойства коэффициента корреляции', ''],
    ['Моменты случайной величины, их свойства.', ''],
    ['Неравенства Чебышева. Закон больших чисел. Сходимость по вероятности.', ''],
    ['Пуассоновское приближение величины, распределенной по биномиальному закону.', ''],
    ['Условные распределения. Условное математическое ожидание. Формула полного математического ожидания.', ''],
    ['Функция распределения случайной величины, ее свойства. Непрерывные случайные величины.', ''],
    ['Плотность распределения случайной величины, ее свойства. Примеры непрерывных случайных величин (равномерное, показательное, нормальное распределения). Нормальное распределение. Его свойства, характеристики дописать.', ''],
    ['Нахождение частных плотностей по общей плотности.', ''],
    ['Независимость непрерывных случайных величин. Распределения максимума и минимума из N независимых случайных величин.', ''],
    ['Локальный смысл плотности.', ''],
    ['Математическое ожидание непрерывных случайных величин. Примеры. Вычислительная функция математического ожидания для непрерывных распределений. Свойства математического ожидания.', ''],
    ['Дисперсия случайной величины. Ее свойства. Примеры.', ''],
    ['Дисперсия суммы. Ковариация и коэффициент корреляции. Свойства ковариационной матрицы.', ''],
    ['Распределение суммы двух независимых случайных величин. Формула свертки.', ''],
    ['Центральная предельная теорема. Интегральная теорема Муавра-Лапласа. Неравенство Берри-Эссеена', ''],
    ['Генерирование случайных величин.', ''],
    ['Классическая модель математической статистики. Выборки, оценки, их характеристики. Оценки математического ожидания и дисперсии.', ''],
    ['Выборочное (эмпирическое) распределение. Гистограмма.', ''],
    ['Методы построения оценок: метод моментов, метод максимального правдоподобия. Сравнение оценок.', ''],
    ['Интервальные оценки и доверительные интервалы. Построение интервальной оценки для неизвестной вероятности в схеме Бернулли.', ''],
    ['Гипотезы, их проверка. Критерий Пирсона. χ2-распределение, распределение Стьюдента.', ''],
    ['Выборочный коэффициент корреляции. Ранговая корреляция. Коэффициент ранговой корреляции Спирмена.', '']
],
  'Сети' : [
    ['Модель OSI (Уровни, задачи каждого уровня, пример программ и протоколов работающих на каждом уровне).', ''],
    ['Модель TCP/IP (Уровни, задачи каждого уровня, пример программ и протоколов работающих на каждом уровне).', ''],
    ['Физическая сеть. Среды передачи данных. Достоинства и недостатки сред передачи данных.', ''],
    ['Логическая и физическая топологии сетей. Трехуровневая иерархическая модель.', ''],
    ['Активное сетевое оборудования (Hub, switch, router).', ''],
    ['Коммутация и маршрутизация, механизмы определения лучшего пути.', '']
]
};