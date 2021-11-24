import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: '1. Angular Js is based on',
      answer: [
        { option: 'MVC Architecture ', correct: false },
        { option: ' Decorator pattern ', correct: false },
        { option: 'MVVM Architectural pattern ', correct: true },
        { option: 'Observer Pattern', correct: false },
      ],
    },
    {
      question:
        '2. AngularJS expressions are written using ',
      answer: [
        { option: '(expression) ', correct: false },
        { option: '{{expression}}', correct: true },
        { option: '{{{expression}}}', correct: false },
        { option: '[expression] ', correct: false },
      ],
    },
    {
      question: '3. What is correct way to apply multiple filters in AngularJs ',
      answer: [
        {
          option:
            '{{ expression | filter1 | filter2 | ... }} ',
          correct: true,
        },
        { option: '{{ expression | {filter1} | {filter2} | ... }}', correct: false },
        {
          option: '{{ expression - {filter1} - {filter2} - ... }}',
          correct: false,
        },
        { option: '{{ {filter1} | {filter2} | ...-expression}}', correct: false },
      ],
    },
    {
      question:
        '4. Which directive initializes an AngularJS application?',
      answer: [
        { option: 'ng-init ', correct: false },
        { option: 'ng-app', correct: true },
        { option: 'ngSrc ', correct: false },
        { option: 'ng-start ', correct: false },
      ],
    },
    {
      question: '5. Which of following is not valid AngularJs Filter',
      answer: [
        { option: 'lowercase', correct: false },
        { option: 'orderby ', correct: false },
        { option: 'email', correct: true },
        { option: 'Prototypes ', correct: false },
      ],
    },
    {
      question:
        '6. What are Angular Controllers are responsible for',
      answer: [
        { option: 'Controlling the data ', correct: true },
        { option: 'Displaying the data ', correct: false },
        { option: 'The two of the above ', correct: false },
        { option: 'None of the above ', correct: false },
      ],
    },
    {
      question:
        '7. Which Angular directive is used to binds the value of HTML controls (input, select, textarea) to application data? ',
      answer: [
        { option: 'ng-cloak ', correct: false },
        { option: 'ng-bind', correct: false },
        { option: 'ng-model', correct: true },
        { option: ' ng-blur', correct: false },
      ],
    },
    {
      question: '8. Which one of following is correct syntax for creating a module in AngularJs? ',
      answer: [
        { option: 'var myModule= angular.module();', correct: false },
        { option: 'var myModule= new Module();', correct: false },
        { option: 'angular.module("app", []); ', correct: true },
        { option: 'none of the above', correct: false },
      ],
    },
    {
      question:
        '9. How do you share data between controller and view?',
      answer: [
        { option: 'using Model ', correct: false },
        { option: 'using services', correct: true },
        { option: 'using factory', correct: false },
        { option: 'using $scope', correct: false },
      ],
    },
    {
      question:
        '10. What is $routeProvider ?',
      answer: [
        { option: 'A service ', correct: true },
        { option: 'A module', correct:  false},
        { option: 'A component', correct: false },
        { option: 'All of the above', correct: false },
      ],
    },
  ];

  constructor() {}
  getQuizzes() {
    return this.quizzes;
  }
}
