import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from './../model/Categoria';
import { environment } from './../../environments/environment.prod';
import { CategoriaService } from './../service/categoria.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})  

export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  idCategoria: number // teste
  produto: Produto = new Produto()
  listaProduto: Produto[]

  idProduto: number // teste
  Usuario: Usuario = new Usuario()


  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private http: HttpClient,
    private produtoService: ProdutoService,
    private authService: AuthService

    
  ) { }

  ngOnInit() {
    // retirar apos testes
    // environment.token = "Basic Z3VzdGF2b0B0ZXN0ZS5jb206MTIzNDU2Nzg5"
    // retirar apos testes
    window.scroll(0,0)
    if(environment.token == ''){
    this.router.navigate(['/home'])
  }

  this.findAllCategorias()
  this.getAllProduto()
}

 findAllCategorias(){
       this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
         this.listaCategoria = resp
       })
     }

  cadastrar(){
     
     this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
       this.categoria = resp
       alert('Tema cadastrado com sucesso!')
       this.findAllCategorias()
       this.categoria = new Categoria()
     })
  }
  // teste gus
  /*
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }
  */
  getAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
    console.log(this.listaProduto)
  }

  // getAllUsuario(){
  //   this.authService.getAllUsuario().subscribe((resp: Usuario) => {
  //     this.Usuario = resp
  //   })
  //   console.log(this.Usuario)
  // }

  // getByIdProduto(id: number){
  //   this.produtoService.getByIdProduto(id).subscribe((resp: Produto[]) => {
  //     this.listaProduto = resp
  //   })
  //   console.log(this.listaProduto)
  // }
}