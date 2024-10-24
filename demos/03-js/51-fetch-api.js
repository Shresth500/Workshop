const getWorkshops = async () => {
    const response = await fetch(`https://workshops-server.onrender.com/workshops`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();

    return data;
};

const onPageLoad = async () => {
    const data = await getWorkshops();
    console.log(data);
};

onPageLoad();