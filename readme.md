# CookUnity exercise

Hello, in this repo you find the solution of a letter maze.
For further information, you can check the [PDF](https://github.com/mazcuiFede/CookUnity/blob/main/CookUnity_Technical_Test.pdf) included in this repo.

## Considerations

In my opinion, I was an overkilling to use classes, interfaces, SOLID principles, etc. Anyway, I use some principles of clean code, such a test and single responsibility principle.
I did not use libraries. The test were made in native JS.

- Pay attention to positions instead of letters, you can transform using the method ```positionToChar(position)```
- The method ```shouldAddValue``` is who has the rules. If the requirements change in the future, you only have to chage this method.
- If you need more information, you can read the tests
- Do test

## Assumptions

- The entry point and the exit are always the same, letter B

## To Run

```node index.js```

## To Test

To run all test

```node test```

To run specific test

```node test```

## Future improvements

- To avoid pass the maze all the time, If some day you want to use classes, please inject it to the constructor
- It's highly recommended to use typeScript, proptypes or something to check types
- Use try and catch to be prepared for errors