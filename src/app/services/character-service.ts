import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListComponent } from '../components/character-list-component/character-list-component';
import { CharacterDetailResponse } from '../interfaces/character-detail-response';

@Service()
export class CharacterService {
    http = inject(HttpClient);

    getAll(): Observable<CharacterListComponent> {
        return this.http.get<CharacterListComponent>('https://rickandmortyapi.com/api/character')
    }

    getOneCharacter(): Observable<CharacterDetailResponse> {
        return this.http.get<CharacterDetailResponse>('https://rickandmortyapi.com/api/character/${id}')
    }



}
