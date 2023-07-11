import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatedSentence: string = lorem.sentence();
  typingText: string = '';

  onInput(event: any) {
    this.typingText = event.target.value;
  }

  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return letter == enteredLetter ? 'correct' : 'incorrect';

  }
}
