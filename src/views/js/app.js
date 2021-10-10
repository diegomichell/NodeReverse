const app = () => {
  const form = document.getElementById('form');
  const resultContainer = document.getElementById('result');
  const dataInput = document.getElementById('data');

  const getReversedText = async (text) => {
    const r = await fetch('/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: text }),
    });

    const { data } = await r.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = dataInput.value;
    const reveredText = await getReversedText(text);

    resultContainer.innerText = reveredText;
    resultContainer.classList.remove("d-none");
  };

  form.onsubmit = handleSubmit;
};

window.onload = () => {
  app();
};

