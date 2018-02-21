# jquery-weekdays
A jquery plugin to create week day's options

![alt text](https://screenshotscdn.firefoxusercontent.com/images/a4c9b11d-57f4-4420-9080-751fdd72a8b3.png)

## Usage

### Simple
```javascript
 $('#weekdays').weekdays();
```
### Custom
```javascript
$('#weekdaysCustom').weekdays({
   days: [ "Domingo" ,"Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] 
});
```
### Parameters
  * listClass: CSS Class used on UL element;
  * itemClass: CSS Class used on each LI element;
  * itemSelectedClass: CSS Class used on each LI element selected;
  * itemSelectedClass: CSS Class used on each LI element selected;
  * singleSelect: change to single select mode, only one option can be choosed; 
  
### Methods
  * selectedIndexes : returns a list of indexes selected elements;

```javascript
$('#weekdays').selectedIndexes() // returns ["0", "1"] 
```
  * selectedDays : returns a list of selected days

```javascript
$('#weekdays').selectedDays() // returns ["Sun", "Mon"]
```
