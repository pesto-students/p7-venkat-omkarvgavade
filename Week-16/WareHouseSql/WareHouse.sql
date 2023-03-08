
/* find the item which has max weight */
select * from items where weight = (select max(weight) from items);

/* find the different warehouses in pune */
select * from warehouses where location_city="Pune";

/* select ono from orders where cno=4574;

select * from ordered_items;
select itemno from ordered_items where ono in(select ono from orders where cno=4574); */

/* find the details of items ordered by mr patil */
select * from items where itemno in(select itemno from ordered_items where ono in(select ono from orders where cno in (select cno from customer where cname="Mr. Patil")));
/* 
select location_city from stores; 
select * from warehouses; */


/* find a warehouse which has maximum stores */
select T.location_city from (select location_city, count(location_city) mycount from warehouses group by location_city order by mycount desc) as T limit 1;

/* select * from items; */

/* Find an item which is ordered for a minimum number of times. */
select decription from items where itemno in(select T.itemno from (select itemno, count(itemno) myCount from ordered_items group by itemno order by mycount asc limit 1) as T);


/* Find the detailed orders given by each customer */
select * from orders where cno in(select cno from customer group by cno);