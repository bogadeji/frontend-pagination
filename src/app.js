// const baseUrl = 'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84';

// const nextBtn = document.getElementById('next-btn');
// const prevBtn = document.getElementById('prev-btn');
// const pageView = document.getElementById('page-view');

// let currentPage = 1;

// const state = {
//     currentPage: 1,
//     pageData: []
// }

// const setCurrentPage = async (items, pageNum) => {
//     if (!items[pageNum]) {
//         items = await fetchData(pageNum);
//     }
    
//     renderDataToTable(items, pageNum);
//     setPageNavStatus(pageNum);
//     console.log(currentPage)
// }

// const disableBtn = btn => {
//     btn.classList.add('disabled');
//     btn.setAttribute('disabled', true);
// }

// const enableBtn = btn => {
//     btn.classList.remove('disabled');
//     btn.removeAttribute('disabled');
// }

// const setPageNavStatus = (pageNum) => {
//     pageNum == 1 ? disableBtn(prevBtn) : enableBtn(prevBtn)
// }

// const fetchData = async (index) => {
//     const apiUrl = `${baseUrl}&page=${index}`
//     const response = await fetch(apiUrl);
//     const apiData = await response.json();
//     const items = apiData.results[0]
//     return items
// }

// const renderDataToTable = (list, pageNum) => {
//     const dataList = document.getElementById('data-list');
//     pageView.innerHTML = `Showing page ${pageNum}`
//     const items = list[pageNum]

//     dataList.innerHTML = ''
//     items.forEach(item => {
//         const row = document.createElement('tr');
//         const noData = document.createElement('td');
//         noData.innerHTML = item.row;

//         const genderData = document.createElement('td');
//         genderData.innerHTML = item.gender;

//         const ageData = document.createElement('td');
//         ageData.innerHTML = item.age

//         row.appendChild(noData);
//         row.appendChild(genderData);
//         row.appendChild(ageData);
//         dataList.appendChild(row);
//     })

// }

// window.addEventListener('load', async () => {
//     const items = await fetchData(currentPage);
//     setCurrentPage(items, 1);

//     prevBtn.addEventListener('click', () => {
//         currentPage--
//         setCurrentPage(items, currentPage);
//     })

//     nextBtn.addEventListener('click', () => {
//         currentPage++
//         setCurrentPage(items, currentPage);
//     })
// })