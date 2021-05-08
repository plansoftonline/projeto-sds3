package com.plansoftonline.dsvendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plansoftonline.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
