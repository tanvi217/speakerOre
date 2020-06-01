import React from 'react';

var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name',
};

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    { types: ['geocode'] }
  );
  autocomplete.setFields(['address_component']);
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  var place = autocomplete.getPlace();
  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

const geolocate = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(geolocation);
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
};

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.autocomplete = null;
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      {}
    );

    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  initialState() {
    return {
      name: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      googleMapLink: '',
    };
  }

  render() {
    return (
      <div>
        <div id='locationField'>
          <input
            id='autocomplete'
            placeholder='Enter your address'
            onFocus={geolocate}
            type='text'
          />
        </div>

        <table id='address'>
          <tr>
            <td>Street address</td>
            <td>
              <input id='street_number' disabled='true' />
            </td>
            <td>
              <input id='route' disabled='true' />
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td>
              <input id='locality' disabled='true' />
            </td>
          </tr>
          <tr>
            <td>State</td>
            <td>
              <input id='administrative_area_level_1' disabled='true' />
            </td>
            <td>Zip code</td>
            <td>
              <input id='postal_code' disabled='true' />
            </td>
          </tr>
          <tr>
            <td>Country</td>
            <td>
              <input id='country' disabled='true' />
            </td>
          </tr>
        </table>

        <script
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&libraries=places&callback=initAutocomplete'
          async
          defer
        ></script>
      </div>
    );
  }
}

export default AddressForm;
