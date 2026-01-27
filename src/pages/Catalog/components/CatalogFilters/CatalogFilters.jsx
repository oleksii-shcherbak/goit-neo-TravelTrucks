import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../../../components/Input/Input';
import FilterButton from '../../../../components/FilterButton/FilterButton';
import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import { applyFilters } from '../../../../redux/catalogSlice';
import { VEHICLE_TYPES, EQUIPMENT_OPTIONS } from '../../../../constants/constants';

export default function CatalogFilters() {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [equipment, setEquipment] = useState({});

    const handleVehicleTypeClick = value => {
        setVehicleType(prev => (prev === value ? '' : value));
    };

    const handleEquipmentClick = value => {
        setEquipment(prev => ({
            ...prev,
            [value]: !prev[value],
        }));
    };

    const handleSearch = () => {
        dispatch(
            applyFilters({
                location,
                vehicleType,
                equipment,
            })
        );
    };

    return (
        <div>
            <div className="mb-8">
                <label className="block mb-2 text-gray">Location</label>
                <div className="relative">
                    <Icon
                        name="map"
                        className="absolute left-[18px] top-1/2 -translate-y-1/2 text-main"
                    />
                    <Input
                        type="text"
                        placeholder="City"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="pl-[44px]"
                    />
                </div>
            </div>

            <div className="mb-8">
                <p className="mb-2 text-gray">Filters</p>
                <h3 className="text-h3 mb-6">Vehicle equipment</h3>
                <div className="border-b pb-6 mb-6">
                    <div className="grid grid-cols-3 gap-2">
                        {EQUIPMENT_OPTIONS.map(option => (
                            <FilterButton
                                key={option.value}
                                name={option.label}
                                icon={option.icon}
                                isActive={equipment[option.value]}
                                onClick={() => handleEquipmentClick(option.value)}
                            />
                        ))}
                    </div>
                </div>

                <h3 className="text-h3 mb-6">Vehicle type</h3>
                <div className="grid grid-cols-3 gap-2">
                    {VEHICLE_TYPES.map(type => (
                        <FilterButton
                            key={type.value}
                            name={type.label}
                            icon={type.icon}
                            isActive={vehicleType === type.value}
                            onClick={() => handleVehicleTypeClick(type.value)}
                            type="radio"
                        />
                    ))}
                </div>
            </div>

            <Button onClick={handleSearch} className="w-full">
                Search
            </Button>
        </div>
    );
}