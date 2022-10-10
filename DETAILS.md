# FRONTEND PAGINATION IMPLEMENTATION

### PROBLEM STATEMENT

Build and deploy a very simple frontend app for paginated data, that does the following

1.  Fetches (randomised) data from `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84` which can be paged by appending `&page=N` where N is the page you want to fetch. E.g appending `&page=1` retrieves the first page, while `&page=4` retrieves the 4th page.

2.  Displays the fetched data in a HTML table with 5 rows (the API only returns 5 records), and allows the user to page next/previous with buttons in the UI

See full details and instructions (including an interesting paging caveat) in this [Google Doc](https://docs.google.com/document/d/1hGXXPykXqO6b9Z2pm55-2T83AIA39cQ3FQxtbGkoR5Y)

#### Note

1.  This comes as a purely HTML/CSS/JS project with [Parcel](https://parceljs.org/docs/) handling build and transpilation. 
2.  We strongly recommend you complete the challenge with this setup, and only use a framework (like Vue/react/Angular) only if absolutely necessary and for which you will be required to provide reasonable justification as part of your evaluation

### SOLUTION IMPLEMENTATION

A data object called **state** is created, to keep track of current page number, as well as the data returned from the API. Mutations to this object are carried out by a method **changeState**. The **state** object makes use of two properties:

-**currentaPage:** This keeps track of the present page number

-**pageData:** This keeps track of the data returned from the API on every request sent.

**Methods:**

The Methods employed are in the application are as follows:

 - **showLoadingUi :**  shows the loader while fetching page data.
 
 - **hideLoadingUI:**  removes the loader from view once the data has been retrieved.
 
 - **disableBtn:** This method disables a button.

 - **enableBtn:** This method enables a disabled button

 - **setPageNavStatus:** This method takes in the **pageNum** input and determines if the btn needs to be disabled or enabled. According to the problem statement, the **Previous** button needs to be disabled on the page that shows the first set of data from the API.

- **getPrevData:** This methods is called when the **Previous** button is clicked. It takes in the state object as an input parameter, and passes on the **pageData** property, as well as the value **currentPage - 1** to the **setCurrentPage** method

- **getNextData:** This methods is called when the **Next** button is clicked. It takes in the state object as an input parameter, and passes on the **pageData** property, as well as the value **currentPage + 1** to the **setCurrentPage** method

-**changeState:**  This method enforces changes made to the state object. The method was created in order to have a single source of truth as regarding mutations to the state object data

 - **setCurrentPage:** This method takes in the **items** and **pageNum** inputs. It checks the list provided to confirm that the items required for the specified page are available, if not, if makes a call to the API using the **fetchData** method. Once the required items are confirmed available, it calls on the **renderDataToTable** method to display the table, as well as the **setPageNavStatus** method to determine if any buttons need to be disabled or enabled.

 - **fetchData:** This method takes an input **index**, retrieves information from the **baseURL** using the index input and returns the list of items from the API.\

 - **renderDataToTable:** This method takes in the list of items to render to the page, as well as the page number to render for. It then constructs the table rows and then inserts them into the DOM.
 
### How Does This Work
When the page is loaded, a request is sent to fetch the first set of data using index ***(N=1)***.
The **setCurrentPage** method is invoked to set up the DOM using the list of items gotten from the request to the API. Before the **setCurrentPage** method makes a call to the API, it checks to be sure the data needed on the new page does not already exist. This is because the API sends data for both the requested page and the next one. If the data exists, the method simply picks up that data and sends to the **renderDataToTable** method. If it doesn't, an API call is first made, and the result sent to the **renderDataToTable** method.
Clicking on the **Previous** and **Next** buttons fetch data for the previous or next set of data respectively. The **Previous** button is disabled when loading the first set of data, as there is no previous data to load.
