import { Component } from '@angular/core';

@Component({
    selector: 'pm-test-component',
    template: `
        <h1>{{pageTitle}}</h1>
    `
})

export class TestComponent{
    pageTitle: string = 'Test Page';

    greet(): string{
        return "Hello World";
    }
}