

create database WareHouse;

use WareHouse;
create table
    cities(
        cityId int(4) not null,
        city varchar(20),
        state varchar(20),
        primary key (cityId)
    );


create table
    warehouses(
        wid int(4),
        store_name varchar(20),
        location_city varchar(20),
        extra_context JSON,
        primary key (wid),
        cityId int(4) not null,
        foreign key (cityId) references cities(cityId)
    );

create table
    stores(
        sid int(4),
        store_name varchar(20),
        location_city varchar(20),
        wid int(4),
        primary key (sid),
        foreign key (wid) references warehouses(wid)
    );

create table
    customer(
        cno int,
        cname varchar(50),
        addr varchar(50),
        cu_city varchar(20),
        primary key (cno)
    );

create table
    orders(
        ono int,
        odate date,
        cno int,
        primary key (ono),
        foreign key (cno) references customer(cno)
    );

create table
    items(
        itemno int,
        decription text,
        weight decimal(5, 2),
        cost decimal(5, 2),
        primary key (itemno)
    );

create table
    ordered_items(
        ono int,
        itemno int,
        ordered_quantity int,
        constraint order_item_pk primary key (ono, itemno),
        constraint fk_order foreign key (ono) references orders (ono),
        constraint fk_items foreign key (itemno) references items (itemno)
    );

create table
    stores_items(
        sid int(4),
        itemno int,
        constraint stores_items_pk primary key (sid, itemno),
        constraint fk_stores foreign key (sid) references stores (sid),
        constraint fk_items_si foreign key (itemno) references items (itemno)
    );