# jquery-weekdays
A jquery plugin to create week day's options

![alt text](https://screenshotscdn.firefoxusercontent.com/images/4d62a3cf-8ca1-49d2-8336-f2bc537cfb32.png)

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
