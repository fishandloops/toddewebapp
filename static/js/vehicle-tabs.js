/**
 * Vehicle Tabs - Filter featured vehicles by category
 */
(function() {
  'use strict';

  const initVehicleTabs = () => {
    const tabContainer = document.getElementById('vehicle-tabs');
    const vehicleGrid = document.getElementById('vehicle-grid');
    
    if (!tabContainer || !vehicleGrid) return;

    const tabs = tabContainer.querySelectorAll('.vehicle-tab');
    const vehicles = vehicleGrid.querySelectorAll('.vehicle-card');

    // Active tab styles
    const activeClasses = ['text-gray-900', 'border-b-2', 'border-todde-red'];
    const inactiveClasses = ['text-gray-500', 'hover:text-gray-900'];

    const setActiveTab = (activeTab) => {
      tabs.forEach(tab => {
        // Remove active styles
        activeClasses.forEach(cls => tab.classList.remove(cls));
        // Add inactive styles
        inactiveClasses.forEach(cls => tab.classList.add(cls));
      });

      // Set active tab styles
      inactiveClasses.forEach(cls => activeTab.classList.remove(cls));
      activeClasses.forEach(cls => activeTab.classList.add(cls));
    };

    const filterVehicles = (category) => {
      let visibleCount = 0;
      
      vehicles.forEach(vehicle => {
        const vehicleCategory = vehicle.dataset.category || 'sedan';
        
        // Map categories for matching
        const categoryMatches = {
          'suv': ['suv'],
          'sedan': ['sedan', 'hatchback'],
          'hybrid': ['hybrid'],
          'electric': ['electric'],
          'coupe': ['coupe', 'truck', 'van', 'other']
        };

        const matches = categoryMatches[category]?.includes(vehicleCategory) || category === 'all';
        
        if (matches && visibleCount < 8) {
          vehicle.style.display = '';
          visibleCount++;
        } else if (matches) {
          vehicle.style.display = 'none'; // Hide extra vehicles beyond 8
        } else {
          vehicle.style.display = 'none';
        }
      });

      // If no vehicles match, show the first 8 regardless
      if (visibleCount === 0) {
        vehicles.forEach((vehicle, index) => {
          vehicle.style.display = index < 8 ? '' : 'none';
        });
      }
    };

    // Add click event to each tab
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const category = tab.dataset.category;
        setActiveTab(tab);
        filterVehicles(category);
      });
    });

    // Initialize with first tab active and show first 4 vehicles
    if (tabs.length > 0) {
      const firstTab = tabs[0];
      setActiveTab(firstTab);
      filterVehicles(firstTab.dataset.category);
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVehicleTabs);
  } else {
    initVehicleTabs();
  }
})();
