CREATE OR REPLACE FUNCTION public.get_arrest_age_counts(
	recordlimit integer)
    RETURNS TABLE(label text, value integer) 
    LANGUAGE plpgsql
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    WITH age_groups AS (
        SELECT
            CASE
                WHEN age_at_arrest BETWEEN 18 AND 25 THEN '18-25'
                WHEN age_at_arrest BETWEEN 26 AND 35 THEN '26-35'
                WHEN age_at_arrest BETWEEN 36 AND 50 THEN '36-50'
                WHEN age_at_arrest > 50 THEN '51+'
                ELSE 'Under 18 / Unknown'
            END AS age_group
        FROM
            arrests
        WHERE
            age_at_arrest IS NOT NULL
    )
    SELECT
        age_group::text AS label,
        COUNT(*)::integer AS value
    FROM 
        age_groups
    GROUP BY 
        age_group
    ORDER BY
        -- Custom ordering is tricky; using label ASC is usually safe for age groups
        label ASC 
    LIMIT recordlimit;
END;
$BODY$;

ALTER FUNCTION public.get_arrest_age_counts(recordlimit integer)
    OWNER TO pi;


CREATE OR REPLACE FUNCTION public.get_arrest_agency_counts(
	recordlimit integer)
    RETURNS TABLE(label text, value integer) 
    LANGUAGE plpgsql
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT
        arresting_agency::text AS label,
        COUNT(*)::integer AS value
    FROM 
        arrests
    WHERE
        arresting_agency IS NOT NULL AND arresting_agency <> ''
    GROUP BY 
        arresting_agency
    ORDER BY
        value DESC
    LIMIT recordlimit;
END;
$BODY$;

ALTER FUNCTION public.get_arrest_agency_counts(recordlimit integer)
    OWNER TO pi;


CREATE OR REPLACE FUNCTION public.get_arrest_charge_counts(
	recordlimit integer)
    RETURNS TABLE(label text, value integer) 
    LANGUAGE plpgsql
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT
        charge::text AS label,
        COUNT(*)::integer AS value
    FROM 
        arrests
    WHERE
        charge IS NOT NULL AND charge <> ''
    GROUP BY 
        charge
    ORDER BY
        value DESC
    LIMIT recordlimit;
END;
$BODY$;

ALTER FUNCTION public.get_arrest_charge_counts(recordlimit integer)
    OWNER TO pi;


CREATE OR REPLACE FUNCTION public.get_arrest_officer_counts(
	recordlimit integer)
    RETURNS TABLE(label text, value integer) 
    LANGUAGE plpgsql
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
BEGIN
    RETURN QUERY
    SELECT
        arresting_officer::text AS label,
        COUNT(*)::integer AS value
    FROM 
        arrests
    WHERE
        arresting_officer IS NOT NULL AND arresting_officer <> ''
    GROUP BY 
        arresting_officer
    ORDER BY
        value DESC
    LIMIT recordlimit;
END;
$BODY$;

ALTER FUNCTION public.get_arrest_officer_counts(recordlimit integer)
    OWNER TO pi;
