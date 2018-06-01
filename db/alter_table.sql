ALTER TABLE houses
ADD $column_name $column_def

[FIRST $column_name || AFTER $column_name];

ALTER TABLE houses 
DROP COLUMN $column_name
