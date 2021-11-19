import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]> {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.get<Categoria[]>('https://rentogen.herokuapp.com/categoria', this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://rentogen.herokuapp.com/categoria/${id}`, this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {  this.token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
    return this.http.post<Categoria>('https://rentogen.herokuapp.com/categoria', categoria, this.token)
  }
  putCategoria(categoria: Categoria): Observable<Categoria> {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.put<Categoria>('https://rentogen.herokuapp.com/categoria', categoria, this.token)
  }

  deleteCategoria(id: number) {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.delete(`https://rentogen.herokuapp.com/categoria/${id}`, this.token)
  }

}