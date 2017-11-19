-- *********************************************
-- * Standard SQL generation                   
-- *--------------------------------------------
-- * DB-MAIN version: 10.0.3              
-- * Generator date: Aug 23 2017              
-- * Generation date: Sat Nov 18 16:37:42 2017 
-- * LUN file: /home/who/Downloads/EP_BD/campus_party.lun 
-- * Schema: Campus Party/SQL 
-- ********************************************* 


-- Database Section
-- ________________ 

DROP DATABASE IF EXISTS party;
create database party;

\c party;

-- DBSpace Section
-- _______________

-- Tables Section
-- _____________ 

create table ATIVIDADE (
     nome varchar(128) not null,
     ini date,
     fim date,
     cpf numeric(11) not null,
     constraint ID_ATIVIDADE_ID primary key (nome));


create table SUPRIMENTO (
     quantidade numeric(128) not null,
     descricao varchar(128) not null,
     id numeric(128) not null,
     constraint ID_SUPRIMENTO_ID primary key (id));

create table UTILIZA (
     nome varchar(128) not null,
     id numeric(128) not null,
     quantidade numeric(128) not null,
     constraint ID_UTILIZA_ID primary key (nome, id));

alter table UTILIZA add constraint FKUTI_SUP_FK
     foreign key (id)
     references SUPRIMENTO;

alter table UTILIZA add constraint FKUTI_ATI
     foreign key (nome)
     references ATIVIDADE;


-- Index Section
-- _____________ 


create unique index ID_ATIVIDADE_IND
     on ATIVIDADE (nome);

create index FKRESPONSAVEL_POR_IND
     on ATIVIDADE (cpf);

create unique index ID_UTILIZA_IND
     on UTILIZA (nome, id);

create index FKUTI_SUP_IND
     on UTILIZA (id);
