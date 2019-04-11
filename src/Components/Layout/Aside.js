import React, { Component } from "react";
import {list} from '../../Services/firebase';
class Aside extends Component {
  constructor(){
    super()		
    this.state = {
      categories : []
    }
  }

  componentWillMount(){
    list(`Categorias/`)
		.on('value',snapshot=>{
			const categories = snapshot.val()
			let category, tmp=[], products=[]
			for(category in categories){
        list(`Categorias/${category}/Productos/`)
        .on('value', snapshot=>{
          const prods = snapshot.val()
          let product, tmpp = []
          for(product in prods){
            tmpp.push({
              id:product,
              name:prods[product].nombre
            })
          }
          products = tmpp;
        })
				tmp.push({
					id:category,
          name:categories[category].nombre,
          products: products
        })
			}
			this.setState({
				categories:tmp
      })
    })
  }


  render() { 
    return (
      <section className="left-aside">
        <div>
          <a className="head-categories">Categorías</a>
          <ul>
            {
              this.state.categories.length > 0?
                this.state.categories.map(category=>{
                  return <div>
                    <a className="section-categories">{category.name}</a>
                      {category.products.map(products=>{
                        return  <li>
                                  <a>{products.name}</a>
                                </li>                      
                      })}    
                  </div>
                })
                
              :
              <p>No categories</p>
            } 
          </ul>
        </div>
      </section>
    );
  }
}
export default Aside;
