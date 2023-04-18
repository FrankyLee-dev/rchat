-- Your SQL goes here
INSERT INTO users(id, username, phone, created_at)
VALUES (
        "4fbd288c-d3b2-4f78-adcf-def976902d50",
        "小李",
        "123",
        "2022-11-23T07:56:30.214162+00:00"
    ),
    (
        "1e9a12c1-e98c-4a83-a55a-32cc548a169d",
        "沃鸡",
        "345",
        "2022-11-23T07:56:30.214162+00:00"
    ),
    (
        "1bc833808-05ed-455a-9d26-64fe1d96d62d",
        "大坑",
        "678",
        "2022-12-23T07:56:30.214162+00:00"
    );
INSERT INTO rooms(
        id,
        name,
        last_message,
        participant_ids,
        created_at
    )
VALUES (
        "f061383b-0393-4ce8-9a85-f31d03762263",
        "小李",
        "",
        "1e9a12c1-e98c-4a83-a55a-32cc548a169d,1bc833808-05ed-455a-9d26-64fe1d96d62d,4fbd288c-d3b2-4f78-adcf-def976902d50",
        "2022-12-23T07:56:30.214162+00:00"
    );