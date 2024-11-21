import { Component, Input, input } from '@angular/core';

@Component({
    selector: 'hero',
    template: `            <div class="bg-gray-700 p-4 mx-40 my-10 rounded-lg shadow-lg">
    <div class="rounded-lg p-10 bg-gray-500">
    <h2 class="text-2xl font-italic mb-4">{{name}}</h2>
    <p>{{description}}</p>
    <p>{{class}}</p>
    <p>Level: {{level}}</p>
    <p>EXP: {{exp}}</p>
    <p>HP: {{hp}}</p>
    <p>MP: {{mp}}</p>
    </div>
</div>`,
standalone: true,
    styleUrls: []
})
export class HeroComponent {

    @Input({ required: true })
    name!: string;

    @Input({ required: false })
    description?: string;

    @Input({ required: true })
    class!: string;

    @Input({ required: true })
    level!: number;

    @Input({ required: true })
    exp!: number;

    @Input({ required: true })
    hp!: number;

    @Input({ required: true })
    mp!: number;

    title = 'Hero Component';
}