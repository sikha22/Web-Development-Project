## Explaination of code
This code is a React component that fetches a text file from a URL, processes the file to get the top 20 most frequent words, and displays them as a bar chart using the react-chartjs-2 library. The user can also export the word frequency data as a CSV file by clicking on a button.

## STEPS:

The component imports React and useState from the react library, as well as the Bar component from the react-chartjs-2 library.

The component defines a function called fetchTextFile using the async keyword to mark it as an asynchronous function. This function fetches a text file from the URL https://www.terriblytinytales.com/test.txt using the fetch API. It then uses the text() method to extract the text content from the response, splits the text into an array of words using a regular expression, and filters out any empty strings. It then reduces the array of words into an object where each key is a word and each value is the frequency of that word in the text. The resulting object is sorted by frequency in descending order, sliced to get the top 20 most frequent words, and transformed into a new object that only contains the top 20 words and their frequencies. Finally, the setWordFrequency function from the useState hook is called to update the component's state with the new word frequency data.

The component defines a function called exportCSV. This function converts the word frequency data in the component's state to a CSV string using the map() and join() methods on the object's entries. It then creates a new Blob object that represents the CSV data with a MIME type of text/csv;charset=utf-8;, creates a URL for the blob using URL.createObjectURL(), and creates a new a element with attributes to specify the URL as the download link and the filename as histogram.csv. Finally, it clicks the download link to download the CSV file.

The component defines a return statement that renders a div element containing a button element with an onClick event handler that calls the fetchTextFile function when clicked. If the wordFrequency state is not null (i.e. if the word frequency data has been fetched and processed), it renders another div element containing a Bar component from the react-chartjs-2 library that displays the word frequency data as a bar chart. It also renders a button element with an onClick event handler that calls the exportCSV function when clicked.

The component is exported as the default export using the export default syntax.

## Note: 
The component assumes that the text file at the specified URL is in English and uses whitespace and apostrophes to tokenize words. It also does not handle errors that may occur during the fetch operation or during the CSV export operation.





