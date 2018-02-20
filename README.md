# jquery-weekdays
A jquery plugin to create week day's options

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
  * listClass  - CSS Class used on UL element;
  * itemClass  - CSS Class used on each LI element;
  * itemSelectedClass - CSS Class used on each LI element selected;
 
### Methods
  * selectedIndexes : returns a list of indexes for each selected elements;

```javascript
$('#weekdays').selectedIndexes() // returns ["0", "1"] 
```
  * selectedDays : returns a list of selected day's 

```javascript
$('#weekdays').selectedDays() // returns ["Sun", "Mon"]
```
