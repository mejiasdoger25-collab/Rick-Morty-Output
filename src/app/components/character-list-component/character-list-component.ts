import { Component, OnInit, signal, inject } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [CharacterListComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit{

  characterService = inject(CharacterService);
  characterList = signal<Character[]>([]);

  ngOnInit(): void {
    this.characterService.getAll().subscribe(resp => {
      this.characterList.set(resp.results);
    });
  }
}
