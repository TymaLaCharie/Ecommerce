
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import customData from '../shared/cars.json';


import 'primereact/resources/themes/saga-orange/theme.css' 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

import 'primeflex/primeflex.scss';


import './DataView.scss';



import Navbar from "../components/Navbar";



import cars from '../shared/cars.json';

import Fuse from "fuse.js";

const ProductsView = () => {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];


    useEffect(() => {
        setProducts(customData)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={`${data.img}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.vehicle} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.vehicle}</div>
                        <div className="product-description">{data.description}</div>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.type}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">R{data.price}</span>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
          <div className="p-col-12 p-md-4">
            <div className="product-grid-item card">
              <div className="product-grid-item-top">
                <div>
                  <i className="pi pi-tag product-category-icon"></i>
                  <span className="product-category">{data.type}</span>
                </div>
              </div>
              <div className="product-grid-item-content">
                <img
                  src={`${data.img}`}
                  onError={(e) =>
                    (e.target.src =
                      "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                  }
                  alt={data.vehicle}
                />
                <div className="product-name">{data.vehicle}</div>
                <div className="product-description">{data.description}</div>
              </div>
              <div className="flex product-grid-item-bottom">
                <span className="product-price">
                  <div className="p-text-center">R{data.price}</div>
                </span>
              </div>
            </div>
          </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
                </div>
                <div className="col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();


    //search
    const [data, setData] = useState(cars);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(cars);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["type", "vehicle"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

    return (
      <>
        <Navbar searchData={searchData}/>
        <div className="grid list-demo">
          <div className="card">
            <DataView
              value={products}
              layout={layout}
              header={header}
              itemTemplate={itemTemplate}
              paginator
              rows={9}
              sortOrder={sortOrder}
              sortField={sortField}
            />
          </div>
        </div>
      </>
    );
}


export default ProductsView;

                 