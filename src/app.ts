const baseUrl = 'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84';

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const pageView = document.getElementById('page-view');
const dataList = document.getElementById('data-list');

const state = {
    currentPage: 1,
    pageData: []
}

const disableBtn = btn => {
  btn.classList.add('disabled');
  btn.setAttribute('disabled', true);
}

const enableBtn = btn => {
  btn.classList.remove('disabled');
  btn.removeAttribute('disabled');
}

const setPageNavStatus = (pageNum) => {
  pageNum == 1 ? disableBtn(prevBtn) : enableBtn(prevBtn)
}

const getPrevData = ({currentPage, pageData}) => {
  if (currentPage <= 1) return;
  setCurrentPage(pageData, currentPage - 1)
}

const getNextData = ({currentPage, pageData}) => {
  setCurrentPage(pageData, currentPage + 1)
}

const changeState = (data) => {
  state.currentPage = data.currentPage;
  state.pageData = data.pageData
}

const setCurrentPage = async (items=[], pageNum=1) => {
    if (!items[pageNum]) {
        items = await fetchData(pageNum);
    }
    changeState({
      pageData: items,
      currentPage: pageNum
    })
    renderDataToTable(items, pageNum);
    setPageNavStatus(pageNum);
}

const fetchData = async (index) => {
    const apiUrl = `${baseUrl}&page=${index}`
    const response = await fetch(apiUrl);
    const apiData = await response.json();
    const items = apiData.results[0]
    changeState({
      currentPage: index,
      pageData: apiData.results
    })
    return items
}

const renderDataToTable = (list, pageNum) => {
    if (pageView != null) pageView.innerHTML = `Showing page ${pageNum}`;

    const items = list[pageNum];

    if (dataList != null) {
      dataList.innerHTML = ''
      items.forEach(item => {
          const row = document.createElement('tr');
          const noData = document.createElement('td');
          noData.innerHTML = item.row;

          const genderData = document.createElement('td');
          genderData.innerHTML = item.gender;

          const ageData = document.createElement('td');
          ageData.innerHTML = item.age;

          row.appendChild(noData);
          row.appendChild(genderData);
          row.appendChild(ageData);
          dataList.appendChild(row);
      })
    }

}

prevBtn?.addEventListener('click', () => getPrevData(state))
nextBtn?.addEventListener('click', () => getNextData(state))

const startApp = async () => {
  setCurrentPage();
};

document.addEventListener('DOMContentLoaded', startApp);