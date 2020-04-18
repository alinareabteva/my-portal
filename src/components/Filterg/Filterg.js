import React, {Component} from 'react';
import './Filterg.css';

const imgs = [{author:"fem1", tag:"Женщины", nameim:'Букет "Елисей"', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/fem1.png?raw=true", url:"https://cadourionline.md/exclusiv/buket-34elisej34/"},
              {author:"fem2", tag:"Женщины", nameim:'"Праздничные дни"', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/fem2.png?raw=true"},
              {author:"masc1", tag:"Мужчины", nameim:'"Вечер в баре"', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/masc1.png?raw=true"},
              {author:"masc2", tag:"Мужчины", nameim:'Набор "Все к чаю"', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/masc2.png?raw=true"},
              {author:"masc3", tag:"Мужчины", nameim:'Дегустация виски', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/masc3.png?raw=true"},
              {author:"masc4", tag:"Мужчины", nameim:'Катание на виндсерфинге', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/masc4.png?raw=true"},
              {author:"fem3", tag:"Женщины", nameim:'Аппаратный педикюр', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/fem3.png?raw=true"},
              {author:"fem4", tag:"Женщины", nameim:'Катание на лошади', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/fem4.png?raw=true"},
              {author:"fem5", tag:"Женщины", nameim:'Сладкая мечта', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/fem5.png?raw=true"},
              {author:"det1", tag:"Дети", nameim:'Lego Star Wars', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/det1.png?raw=true"},
              {author:"det2", tag:"Дети", nameim:'Плюшевый Пес Шарик', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/det2.png?raw=true"},
              {author:"det3", tag:"Дети", nameim:'Lego Batman', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/det3.png?raw=true"},
              {author:"masc5", tag:"Мужчины", nameim:'Букет для Него', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/masc5.png?raw=true"},
              {author:"fem6", tag:"Женщины", nameim:'Карта звездного неба', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/masc6.png?raw=true"},
              {author:"masc7", tag:"Мужчины", nameim:'Mug "Rock Star"', src:"https://github.com/alinareabteva/my-portal/blob/master/src/components/Filterg/images/masc7.png?raw=true"}
];

const filters = [
  {name:"Женщины", status: false},
  {name:"Мужчины", status: false},
  {name:"Дети", status: false}

];

const Filters = ({onClickAll, all, onClick, filters}) =>
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">Все</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input
              id={filter.name}
              type="checkbox"
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({imgs}) =>
  <ul>
    {imgs.map((img, i)=>
      <li  key={i}>
        <figure>
          <img src={img.src} alt={img.author}/>
          <p className="nameim" src={img.url}>{img.nameim}</p>
          <figcaption>
            <div>{img.author} </div>
            <span>{img.tag}</span>
          </figcaption>
        </figure>
      </li>)}
  </ul>

class Filterg extends React.Component{
  state ={
    imgs,
    filters,
    all: true
  };

  setFilter = (e) =>{
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });

    this.updateFilters();
    this.updateImgs();
  }

  setAll = () =>{
    const {filters} = this.state;

    filters.forEach(
      filter => {
        filter.status = false;
      }
    );

    this.setState({
      all: true,
      filters
    });
  }

  updateFilters(){
    const allFiltersTrue = filters.every( filter => filter.status === true);
    const allFiltersFalse = filters.every( filter => filter.status === false);

    if(allFiltersTrue||allFiltersFalse){
      this.setAll();
    }else{
      this.setState({
        all: false
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey)=> {
        if((img.tag==filter.name)&&(filter.status==true)){
          newImgs[a] = img;
          a++;
        }
      })
    });

    this.setState({
      imgs: newImgs
    });
  }

  render(){
    const {filters, all} = this.state;
    return(
      <div>
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all)?(<Cards imgs = {imgs}/> ):(<Cards imgs = {this.state.imgs}/>
        )}

      </div>
    );
  }
}


export default Filterg;
