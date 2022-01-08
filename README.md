# What we'll learn

- event listener
- state
- conditionnal rendering
- forms
- side effects

# State

"State" refers to values that are manager by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.

# Props

"Props" refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above". A component receiving props is not allowed to modify those props. (i.e they are "immutable")

# Quizz

1. How would you describe the concept of "state"?
   Une facon pour React de se souvenir des valeurs sauvegardées à l'intérieur d'un component. Cela revient à déclarer des variables à l'intérieur d'un composant, avec quelques avantages supplémentaires.

2. When would you want to use props instead of state?
   (analogie d'une fonction => les props sont comme les parametres que l'on passe à une fonction quand on l'invoque)
   Chaque fois que l'on souhaite passer des données dans un composant afin que ce composant puisse déterminer ce qui sera affiché à l'écran.

3. When would you want to use state instead of props?
   (analogie d'une fonction => le state est comme les variables que l'on déclare à l'intérieur de notre fonction, et ces nouvelles variables nous aide à accomplir la tâche de notre fonction en question.)
   A chaque fois que l'on souhaite qu'un component maintienne certaines valeurs à l'intérieur d'un component. (Et "se souvenir" de ces valeurs même lorsque React rend à nouveau le component).

4. What does "immutable" mean? Are props immutable? Is state immutable?
   immutable === unchanging.
   immutable signifie qu'on ne peut pas les modifier. Props sont immutable, le state ne l'est pas (state is mutable)!
