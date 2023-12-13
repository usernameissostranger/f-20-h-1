const countries = [
    {
      Country: 'KG',
      Code: '+996'
    },
    {
      Country: 'UZ',
      Code: '+998'
    },
    {
      Country: 'RU',
      Code: '+7'
    },
    {
      Country: 'UA',
      Code: '+380'
    }
  ];

  function getCountryByCode(input) {
    const parts = input.split(' ');
    const countryCode = parts[0];

    let foundCountry = '';

    for (let i = 0; i < countries.length; i++) {
      if (countries[i].Code === countryCode) {
        foundCountry = countries[i].Country;
        break;
      }
    }

    return foundCountry;
  }

  function processInput() {
    const inputElement = document.getElementById('phoneNumberInput');
    const inputValue = inputElement.value.trim();
    const country = getCountryByCode(inputValue);

    if (country) {
      alert(`Input: ${inputValue}\nOutput: ${country}`);
    } else {
      alert(`Input: ${inputValue}\nOutput: "Another country"`);
    }
  }