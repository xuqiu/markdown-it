# This demo shows a markdown use case of code runner service



#### Normal code fence as usual
``` python
import datetime

# Get current date and time
current_datetime = datetime.datetime.now()

# Format as strings
current_time = current_datetime.strftime("%H:%M:%S")  # 24-hour format
current_date = current_datetime.strftime("%Y-%m-%d")  # Year-Month-Day format
current_datetime_str = current_datetime.strftime("%Y-%m-%d %H:%M:%S")  # Year-Month-Day Hour:Minute:Second format

# Print the results
print("Current time (24-hour format):", current_time)
print("Current date:", current_date)
print("Current date and time:", current_datetime_str)
```
#### Runnable code fence
- Just add runnable tag behind the language tag
``` python runnable
import datetime

# Get current date and time
current_datetime = datetime.datetime.now()

# Format as strings
current_time = current_datetime.strftime("%H:%M:%S")  # 24-hour format
current_date = current_datetime.strftime("%Y-%m-%d")  # Year-Month-Day format
current_datetime_str = current_datetime.strftime("%Y-%m-%d %H:%M:%S")  # Year-Month-Day Hour:Minute:Second format

# Print the results
print("Current time (24-hour format):", current_time)
print("Current date:", current_date)
print("Current date and time:", current_datetime_str)
```
---
- Example for another lang 
``` go runnable
package main

import (
	"fmt"
	"time"
)

func main() {
	// Get current time
	now := time.Now()

	// Get the number of days in the current month
	year, month, _ := now.Date()
	daysInMonth := time.Date(year, month+1, 0, 0, 0, 0, 0, time.UTC).Day()

	fmt.Printf("Number of days in the current month: %d\n", daysInMonth)
}
```
