import React from 'react';

import '../App.css'



const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        var exampleItems = [
            { adName: "adName 1",
            roll: "1",
          emailid:"example@example.com"  },
            { adName: "adName 2",
            roll: "2",
            emailid:"example@example.com" },
            { adName: "adName 3",
            roll: "3",
            emailid:"example@example.com" },
            { adName: "adName 4",
            roll: "4",
            emailid:"example@example.com" },
            { adName: "adName 5",
            roll: "5",
            emailid:"example@example.com" },
            { adName: "adName 6",
            roll: "6",
            emailid:"example@example.com" },
            { adName: "adName 7",
            roll: "7",
            emailid:"example@example.com" },
            { adName: "adName 8",
            roll: "8",
            emailid:"example@example.com" },
            { adName: "adName 9",
            roll: "9",
            emailid:"example@example.com" },
            { adName: "adName 10",
            roll: "10",
            emailid:"example@example.com" },
            { adName: "adName 11",
            roll: "11",
            emailid:"example@example.com" },
            { adName: "adName 12",
            roll: "12",
            emailid:"example@example.com" },
            { adName: "adName 13",
            roll: "13",
            emailid:"example@example.com" },
            { adName: "adName 14",
            roll: "14",
            emailid:"example@example.com" },
            { adName: "adName 15",
            roll: "15",
            emailid:"example@example.com" },
            { adName: "adName 16",
            roll: "16",
            emailid:"example@example.com" },
            { adName: "adName 17",
            roll: "17",
            emailid:"example@example.com" },
            { adName: "adName 18",
            roll: "18",
            emailid:"example@example.com" },
            { adName: "adName 19",
            roll: "19",
            emailid:"example@example.com" },
            { adName: "adName 20",
            roll: "20",
            emailid:"example@example.com" },
            { adName: "adName 21",
            roll: "21",
            emailid:"example@example.com" },
            { adName: "adName 22",
            roll: "22",
            emailid:"example@example.com" },
            { adName: "adName 23",
            roll: "23",
            emailid:"example@example.com" },
            { adName: "adName 24",
            roll: "24",
            emailid:"example@example.com" },
            { adName: "adName 25",
            roll: "25",
            emailid:"example@example.com" },
            { adName: "adName 26",
            roll: "26",
            emailid:"example@example.com" },
            { adName: "adName 27",
            roll: "27",
            emailid:"example@example.com" },
            { adName: "adName 28",
            roll: "28",
            emailid:"example@example.com" },
            { adName: "adName 29",
            roll: "29",
            emailid:"example@example.com" },
            { adName: "adName 30",
            roll: "30",
            emailid:"example@example.com" },
            { adName: "adName 31",
            roll: "31",
            emailid:"example@example.com" },
            { adName: "adName 32",
            roll: "32",
            emailid:"example@example.com" },
            { adName: "adName 33",
            roll: "33",
            emailid:"example@example.com" },
            { adName: "adName 34",
            roll: "34",
            emailid:"example@example.com" },
            { adName: "adName 35",
            roll: "37",
            emailid:"example@example.com" },
            { adName: "adName 37",
            roll: "38",
            emailid:"example@example.com" },
            { adName: "adName 38",
            roll: "39",
            emailid:"example@example.com" },
            { adName: "adName 39",
            roll: "40",
            emailid:"example@example.com" },
            { adName: "adName 40",
            roll: "41",
            emailid:"example@example.com" },
            { adName: "adName 41",
            roll: "41",
            emailid:"example@example.com" },
            { adName: "adName 42",
            roll: "42",
            emailid:"example@example.com" },
            { adName: "adName 43",
            roll: "43",
            emailid:"example@example.com" },
          
          ];
        this.state = { exampleItems: exampleItems,
            pager: {} };
    }

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var { items, pageSize } = this.props;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    handlepagesize(event){

        let newpagesize=parseInt(event.target.value);
        
        let lastPage = Math.ceil(this.state.exampleItems.length/newpagesize);
        let newcurrentpage=this.state.currentpage;
        
        if(this.state.currentpage>lastPage){
            newcurrentpage=lastPage
        }  
        this.setState({
          pagesize: newpagesize,
          currentpage: newcurrentpage
        }) 
        
      }
    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (<div>
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                <li><a>
                   {pager.currentPage} 
                    </a></li>
                
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
                <li className="setRecordsPerPage" >
                <select id = "setRecordsPerPage"  onChange={this.handlepagesize.bind(this)}>
                 <option value = "5">5</option>
                 <option value = "10">10</option>
                 <option value = "20">20</option>
                </select>
                </li>
            </ul> </div>
        );
    }
}

export default Pagination;