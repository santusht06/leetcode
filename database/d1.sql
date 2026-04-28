WITH RECURSIVE hierarchy AS (
    -- Step 1: build levels
    SELECT 
        employee_id,
        employee_name,
        manager_id,
        salary,
        1 AS level
    FROM Employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT 
        e.employee_id,
        e.employee_name,
        e.manager_id,
        e.salary,
        h.level + 1
    FROM Employees e
    JOIN hierarchy h ON e.manager_id = h.employee_id
),

subtree AS (
    -- Step 2: build manager -> all descendants mapping
    SELECT 
        employee_id AS manager,
        employee_id AS emp
    FROM Employees

    UNION ALL

    SELECT 
        s.manager,
        e.employee_id
    FROM subtree s
    JOIN Employees e ON e.manager_id = s.emp
)

SELECT 
    h.employee_id,
    h.employee_name,
    h.level,

    -- team size (exclude self)
    COUNT(s.emp) - 1 AS team_size,

    -- total salary (include self)
    SUM(e.salary) AS budget

FROM hierarchy h
JOIN subtree s ON h.employee_id = s.manager
JOIN Employees e ON s.emp = e.employee_id

GROUP BY h.employee_id, h.employee_name, h.level

ORDER BY 
    h.level ASC,
    budget DESC,
    h.employee_name ASC;