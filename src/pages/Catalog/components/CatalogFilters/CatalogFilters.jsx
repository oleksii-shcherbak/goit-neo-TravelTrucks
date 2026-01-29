import { useState } from 'react';
import Input from '../../../../components/Input/Input';
import { useDispatch } from 'react-redux';
import Icon from '../../../../components/Icon/Icon';
import FilterButton from '../../../../components/FilterButton/FilterButton';
import Button from '../../../../components/Button/Button';
import { catalogActions } from '../../../../redux/catalogSlice';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter/capitalizeFirstLetter';
import {
  EQUIPMENT_OPTIONS,
  VEHICLE_TYPES,
} from '../../../../constants/constants';

export default function CatalogFilters() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: '',
    equipment: {},
    type: '',
  });

  const handleChangeFilter = (filterName, value) => {
    if (filterName === 'location') {
      setFilters(prevState => ({
        ...prevState,
        location: value,
      }));
    }
    if (filterName === 'equipment') {
      setFilters(prevState => {
        const result = {
          ...prevState,
          equipment: { ...prevState.equipment },
        };
        if (result.equipment[value]) {
          delete result.equipment[value];
        } else {
          result.equipment[value] = true;
        }
        return result;
      });
    }
    if (filterName === 'type') {
      setFilters(prevState => ({
        ...prevState,
        type: prevState.type === value ? '' : value,
      }));
    }
  };

  const handleApplyFilters = () => {
    dispatch(catalogActions.applyFilters(filters));
  };

  return (
    <div className="basis-[360px] shrink-0 mr-16">
      <label className="text-gray mb-2 inline-block">Location</label>
      <Input
        value={filters.location}
        onChange={event => handleChangeFilter('location', event.target.value)}
        placeholder="City"
        icon={<Icon name="map" />}
        className="mb-10"
      />
      <strong className="text-text font-medium">Filters</strong>
      <h3 className="text-h3 mt-8">Vehicle equipment</h3>
      <hr className="my-6" />
      <ul className="flex flex-wrap gap-3">
        {EQUIPMENT_OPTIONS.map(item => (
          <li key={item.name + item.icon}>
            <FilterButton
              onClick={() => handleChangeFilter('equipment', item.name)}
              icon={item.icon}
              name={capitalizeFirstLetter(item.name)}
              isActive={filters.equipment[item.name]}
            />
          </li>
        ))}
      </ul>
      <h3 className="text-h3 mt-8">Vehicle type</h3>
      <hr className="my-6" />
      <ul className="flex flex-wrap gap-3">
        {VEHICLE_TYPES.map(item => (
          <li key={item.value}>
            <FilterButton
              onClick={() => handleChangeFilter('type', item.value)}
              icon={item.icon}
              name={item.label}
              isActive={filters.type === item.value}
            />
          </li>
        ))}
      </ul>
      <Button className="mt-10" onClick={handleApplyFilters}>
        Search
      </Button>
    </div>
  );
}
