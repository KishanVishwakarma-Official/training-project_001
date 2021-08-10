-- Table: public.admin_tbl

CREATE TABLE IF NOT EXISTS public.admin_tbl
(
    admin_id integer NOT NULL DEFAULT nextval('admin_tbl_admin_id_seq'::regclass),
    admin_name character varying COLLATE pg_catalog."default" NOT NULL,
    admin_email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    role_id integer DEFAULT 1,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now(),
    CONSTRAINT admin_tbl_pkey PRIMARY KEY (admin_id)
)

TABLESPACE pg_default;

ALTER TABLE public.admin_tbl
    OWNER to postgres;


-- Table: public.category_tbl

CREATE TABLE IF NOT EXISTS public.category_tbl
(
    cat_id integer NOT NULL DEFAULT nextval('category_tbl_cat_id_seq'::regclass),
    parent_id integer NOT NULL,
    cat_name character varying COLLATE pg_catalog."default" NOT NULL,
    created_by character varying COLLATE pg_catalog."default",
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT category_tbl_pkey PRIMARY KEY (cat_id)
)

TABLESPACE pg_default;

ALTER TABLE public.category_tbl
    OWNER to postgres;

-- Table: public.product_tbl


CREATE TABLE IF NOT EXISTS public.product_tbl
(
    pro_id integer NOT NULL DEFAULT nextval('product_tbl_pro_id_seq'::regclass),
    pro_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    pro_desc character varying(255) COLLATE pg_catalog."default",
    cat_id integer,
    is_active boolean,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT pro_id PRIMARY KEY (pro_id),
    CONSTRAINT cat_id FOREIGN KEY (cat_id)
        REFERENCES public.category_tbl (cat_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.product_tbl
    OWNER to postgres;

-- Table: public.role_tbl

-- DROP TABLE public.role_tbl;

CREATE TABLE IF NOT EXISTS public.role_tbl
(
    role_id integer NOT NULL DEFAULT nextval('role_tbl_role_id_seq'::regclass),
    role_name character varying COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT role_tbl_pkey PRIMARY KEY (role_id)
)

TABLESPACE pg_default;

ALTER TABLE public.role_tbl
    OWNER to postgres;